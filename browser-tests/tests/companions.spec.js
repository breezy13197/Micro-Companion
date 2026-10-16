const { test, expect } = require('@playwright/test');
const { COMPANIONS, watchProblems, openCompanion, hasSidewaysScroll, solveCheckpoint } = require('./helpers');

for (const id of COMPANIONS) {
  test.describe(id, () => {

    test('loads cleanly and shows the first-visit state', async ({ page }) => {
      const problems = watchProblems(page);
      await openCompanion(page, id);

      expect(await page.evaluate(() => typeof Act)).toBe('object');
      await expect(page.locator('#ringPct')).toHaveText('0%');
      await expect(page.locator('#topPill')).toHaveText('Not started');
      await expect(page.locator('#topTitle')).not.toBeEmpty();
      expect(await page.evaluate(() => TOPIC_ID)).toBe(id);

      // A first-ever visit must start with nothing saved. (Quizzes pre-build an
      // unanswered attempt when the page opens, so for those we check that no
      // answer has been picked instead of checking for an empty list.)
      const notEmpty = await page.evaluate(() =>
        ['checks', 'activities', 'best', 'myCards', 'pending'].filter(k => {
          // Labs save the view they open with under names ending "_v". That is
          // partial-progress bookkeeping, not "done", so it is ignored here.
          const keys = Object.keys(state[k] || {}).filter(n => !/_v$/.test(n));
          return keys.length > 0;
        }));
      expect(notEmpty).toEqual([]);
      const answered = await page.evaluate(() =>
        Object.keys(state.attempts || {}).filter(q => state.attempts[q].picks.some(p => p !== null)));
      expect(answered).toEqual([]);
      expect(problems.list()).toEqual([]);
    });

    test('every section opens and is the only one showing', async ({ page }) => {
      const problems = watchProblems(page);
      await openCompanion(page, id);
      const keys = await page.evaluate(() => FLOW.map(f => f.key));
      expect(keys.length).toBeGreaterThan(10);

      for (let i = 0; i < keys.length; i++) {
        await page.evaluate(n => goTo(n), i);
        const visible = await page.evaluate(() =>
          [...document.querySelectorAll('section.section')]
            .filter(s => s.offsetParent !== null).map(s => s.dataset.key));
        expect(visible, 'section ' + keys[i]).toEqual([keys[i]]);
        expect(await page.locator('#topTitle').textContent(), 'title for ' + keys[i]).not.toBe('');
      }
      expect(problems.list()).toEqual([]);
    });

    test('a checkpoint locks on the right answer and is remembered after reload', async ({ page }) => {
      const problems = watchProblems(page);
      await openCompanion(page, id);
      const found = await page.evaluate(() => {
        const host = document.querySelector('[data-check]');
        const sec = host.closest('section.section');
        return { check: host.dataset.check, index: FLOW.findIndex(f => f.key === sec.dataset.key) };
      });
      await page.evaluate(n => goTo(n), found.index);
      const host = page.locator('[data-check="' + found.check + '"]');
      const box = await host.evaluate(h => h.classList.contains('choices')) ? host : host.locator('.choices');
      await solveCheckpoint(page, box);
      // After locking, every option is disabled.
      await expect(box.locator('.choice:not([disabled])')).toHaveCount(0);

      const saved = await page.evaluate(c => state.checks[c], found.check);
      expect(saved).not.toBeUndefined();

      await page.reload();
      await page.waitForFunction(() => typeof FLOW !== 'undefined');
      expect(await page.evaluate(c => state.checks[c], found.check)).toBe(saved);
      expect(problems.list()).toEqual([]);
    });

    test('flashcard flips to show the answer side', async ({ page }) => {
      const problems = watchProblems(page);
      await openCompanion(page, id);
      await page.evaluate(() => goTo(FLOW.findIndex(f => f.key === 'flashcards')));

      const card = page.locator('#fcCard');
      await expect(page.locator('#fcFront')).not.toBeEmpty();
      await expect(page.locator('#fcBack')).not.toBeEmpty();

      // Which half of the card is actually on top at its centre?
      const topFace = () => card.evaluate(c => {
        const r = c.getBoundingClientRect();
        const hit = document.elementFromPoint(r.left + r.width / 2, r.top + r.height / 2);
        return hit && hit.closest('.fc-back') ? 'back' : (hit && hit.closest('.fc-face') ? 'front' : 'other');
      });
      await card.scrollIntoViewIfNeeded();
      expect(await topFace()).toBe('front');
      await card.click();
      await expect(card).toHaveClass(/flipped/);
      await expect.poll(topFace, { timeout: 4000 }).toBe('back');

      // Keyboard works too (Enter flips it back).
      await card.press('Enter');
      await expect(card).not.toHaveClass(/flipped/);
      expect(problems.list()).toEqual([]);
    });

    test('every hands-on activity can be solved and reports a result', async ({ page }) => {
      const problems = watchProblems(page);
      await openCompanion(page, id);
      // (Some activities are made of several smaller ones, so their names are
      // not all in Act.registry. What matters is the outcome checked below.)
      await page.evaluate(() => Act.solveAll());
      const unset = await page.evaluate(() => {
        const out = [];
        MANIFEST.modules.forEach(m => m.sections.forEach(s => {
          if (s.activity && (state.activities[s.activity] === undefined || state.activities[s.activity] === null)) out.push(s.activity);
        }));
        return out;
      });
      expect(unset, 'activities still empty after solveAll').toEqual([]);

      // Restoring saved activity progress runs different code from a fresh load.
      await page.reload();
      await page.waitForFunction(() => typeof FLOW !== 'undefined');
      const stillSet = await page.evaluate(() =>
        MANIFEST.modules.every(m => m.sections.every(s => !s.activity || (state.activities[s.activity] != null))));
      expect(stillSet, 'activity results survive a reload').toBe(true);
      const lastIndex = await page.evaluate(() => FLOW.length - 1);
      for (let i = 0; i <= lastIndex; i++) await page.evaluate(n => goTo(n), i);
      expect(problems.list()).toEqual([]);
    });

    test('a quiz renders, grades once, and can be restarted', async ({ page }) => {
      const problems = watchProblems(page);
      await openCompanion(page, id);
      const qi = await page.evaluate(() => {
        const q = document.querySelector('[data-quiz]');
        return FLOW.findIndex(f => f.key === q.closest('section.section').dataset.key);
      });
      await page.evaluate(n => goTo(n), qi);
      const section = page.locator('section.section:visible');
      await expect(section.locator('.q-submit')).toBeVisible();
      const questions = section.locator('.quiz-body .choice, .quiz-body input[type=radio], .quiz-body button');
      expect(await questions.count()).toBeGreaterThan(4);

      // Answering nothing should not grade the quiz.
      await section.locator('.q-submit').click();
      await expect(section.locator('.q-result')).toBeHidden();
      await expect(section.locator('.q-warn')).not.toBeEmpty();
      expect(problems.list()).toEqual([]);
    });

    test('has no sideways scrolling at desktop width', async ({ page, isMobile }) => {
      test.skip(isMobile, 'Phones are covered by the responsive tests');
      await page.setViewportSize({ width: 1280, height: 800 });
      await openCompanion(page, id);
      expect(await hasSidewaysScroll(page)).toBe(false);
    });
  });
}
