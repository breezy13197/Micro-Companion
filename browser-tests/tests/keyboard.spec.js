const { test, expect } = require('@playwright/test');
const { openCompanion } = require('./helpers');

/* Keyboard-only checks. Every interaction is a real Tab, Shift+Tab, Enter or
   Space press: nothing is clicked, and no control is focused by script. (Pages
   are opened, and a few pieces of test data are set up, by script; the
   journeys that matter start from there using only the keyboard.)

   What these tests can and cannot prove: they check where the keyboard cursor
   is, what each control exposes (aria-pressed, hidden result text, live-region
   settings), and that the focused element is actually on screen. They cannot
   hear a screen reader, so "announced" means "the live region exists and its
   text changes", not that a particular screen reader spoke it. */

/* Collects page problems like helpers.watchProblems, but ignores ONLY the
   browser's own request for /favicon.ico (the site has none). */
function watch(page) {
  const found = [];
  const isFavicon = u => /\/favicon\.ico(\?|$)/.test(u || '');
  page.on('pageerror', e => found.push('JS error: ' + e.message));
  page.on('console', m => {
    if (m.type() === 'error' && !isFavicon(m.location().url)) found.push('Console error: ' + m.text());
  });
  page.on('requestfailed', r => { if (!isFavicon(r.url())) found.push('Failed to load: ' + r.url()); });
  page.on('response', r => { if (r.status() >= 400 && !isFavicon(r.url())) found.push('HTTP ' + r.status() + ': ' + r.url()); });
  return { list: () => found };
}

/* Presses Tab (or Shift+Tab) until the target has focus. Fails if it is not
   reached within `max` presses, which also catches a control that cannot be
   reached by keyboard at all. `target` is a Playwright locator. */
async function tabTo(page, target, { shift = false, max = 400 } = {}) {
  const handle = await target.first().elementHandle();
  expect(handle, 'target to tab to exists').not.toBeNull();
  for (let i = 0; i < max; i++) {
    if (await page.evaluate(el => document.activeElement === el, handle)) return i;
    await page.keyboard.press(shift ? 'Shift+Tab' : 'Tab');
  }
  throw new Error('Not reached by ' + (shift ? 'Shift+' : '') + 'Tab within ' + max + ' presses: ' + target);
}

/* The element is inside the visible part of the window. */
async function expectOnScreen(page, locator) {
  // Retries briefly: the page's own smooth scrolling may still be settling. One pixel of
  // slack covers sub-pixel rounding.
  await expect.poll(() => locator.evaluate(el => {
    const r = el.getBoundingClientRect();
    return r.top >= -1 && r.top < window.innerHeight;
  }), { message: 'element starts inside the visible window' }).toBe(true);
}

/* Opens the phone-size menu, by keyboard, if it is folded away. */
async function openMenuIfFolded(page) {
  const toggle = page.locator('.menu-toggle');
  if (await toggle.isVisible() && (await toggle.getAttribute('aria-expanded')) === 'false') {
    await tabTo(page, toggle);
    await page.keyboard.press('Enter');
  }
}

/* For a quiz or checkpoint host, the position (0-based, as displayed) of the
   correct option and of one wrong option, found from the bank, not the page. */
const optionPositions = (host, kind) => host.evaluate((root, kind) => {
  const btns = Array.from(root.querySelectorAll('.choice'));
  const strip = b => b.textContent.replace(/^[A-Z]/, '').replace(/\s+/g, ' ').trim();
  let q;
  if (kind === 'check') {
    q = CHECKPOINTS[(root.closest('[data-check]') || root).dataset.check];
  } else {
    const stem = root.querySelector('.q-stem').innerHTML;
    q = POOL.filter(x => x.stem === stem)[0];
  }
  const norm = t => String(t).replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
  const right = btns.findIndex(b => strip(b) === norm(q.options[q.answer]));
  return { right, wrong: btns.findIndex((_, i) => i !== right), count: btns.length };
}, kind);

test.describe('keyboard and screen-reader behavior', () => {

  test('hub exam: Tab, Shift+Tab and Space keep focus on the chosen answer; navigation lands on screen', async ({ page }) => {
    const problems = watch(page);
    await page.goto('/index.html');
    // Setup shortcut: the hub's own integration bank is always unlocked.
    await page.evaluate(() => { EXAMSETUP.topics = ['hub']; EXAMSETUP.count = 5; setView('exam'); });
    await tabTo(page, page.getByRole('button', { name: 'Start exam' }));
    await page.keyboard.press('Enter');
    await expect(page.locator('#qstem')).toBeFocused();

    // Tab from the question into the answers, select B with Space.
    await page.keyboard.press('Tab');
    await expect(page.locator('.choice').nth(0)).toBeFocused();
    await page.keyboard.press('Tab');
    await expect(page.locator('.choice').nth(1)).toBeFocused();
    await page.keyboard.press('Space');
    await expect(page.locator('.choice').nth(1)).toBeFocused();            // survived the redraw
    await expect(page.locator('.choice').nth(1)).toHaveAttribute('aria-pressed', 'true');
    await expect(page.locator('#mc-live')).toHaveText(/Answer B selected/);

    // Shift+Tab back to A, change the answer: the selection moves, focus stays.
    await page.keyboard.press('Shift+Tab');
    await expect(page.locator('.choice').nth(0)).toBeFocused();
    await page.keyboard.press('Enter');
    await expect(page.locator('.choice').nth(0)).toBeFocused();
    await expect(page.locator('.choice').nth(0)).toHaveAttribute('aria-pressed', 'true');
    await expect(page.locator('.choice').nth(1)).toHaveAttribute('aria-pressed', 'false');

    // Flag and Clear keep focus on themselves too.
    await tabTo(page, page.getByRole('button', { name: /Flag for later/ }));
    await page.keyboard.press('Enter');
    await expect(page.locator('[data-fk="flag"]')).toBeFocused();
    await expect(page.locator('[data-fk="flag"]')).toHaveAttribute('aria-pressed', 'true');

    // Next: new question, cursor on the question text, announced.
    await tabTo(page, page.getByRole('button', { name: 'Next →' }));
    await page.keyboard.press('Enter');
    await expect(page.locator('#qstem')).toBeFocused();
    await expect(page.locator('#mc-live')).toHaveText(/Question 2 of 5/);

    // Jump-grid button 1 sits at the bottom of the card; going back must leave
    // the question on screen.
    await tabTo(page, page.getByRole('button', { name: 'Go to question 1' }));
    await page.keyboard.press('Enter');
    await expect(page.locator('#qstem')).toBeFocused();
    await expectOnScreen(page, page.locator('#qstem'));

    // Submit by keyboard (some questions are unanswered, so a confirm appears).
    page.once('dialog', d => d.accept());
    await tabTo(page, page.getByRole('button', { name: 'Submit', exact: true }));
    await page.keyboard.press('Enter');
    const heading = page.locator('#main h2').first();
    await expect(heading).toBeFocused();
    await expect(heading).toContainText('correct');
    await expectOnScreen(page, heading);
    expect(problems.list()).toEqual([]);
  });

  test('hub: a menu item opened by keyboard moves focus to the new screen heading', async ({ page }) => {
    await page.goto('/index.html');
    await openMenuIfFolded(page);
    await tabTo(page, page.locator('#nav button[data-view="help"]'));
    await page.keyboard.press('Enter');
    await expect(page.locator('#main h1')).toBeFocused();
    await expectOnScreen(page, page.locator('#main h1'));
  });

  test('checkpoint: wrong then right leaves exactly one result label, and feedback is a live region', async ({ page }) => {
    const problems = watch(page);
    await openCompanion(page, 'bacteria1');
    const key = await page.evaluate(() =>
      FLOW.map(f => f.key).filter(k => document.querySelector('.section[data-key="' + k + '"] [data-check]'))[0]);
    await page.goto('/bacteria1.html?s=' + key);
    await page.waitForFunction(() => typeof FLOW !== 'undefined' && document.querySelector('.section.active'));

    const host = page.locator('.section.active [data-check]').first();
    const choices = host.locator('.choice');
    const fb = host.locator('.feedback');
    await expect(fb).toHaveAttribute('role', 'status');
    await expect(fb).toHaveAttribute('aria-live', 'polite');
    const pos = await optionPositions(host, 'check');
    expect(pos.right).toBeGreaterThanOrEqual(0);

    // A known wrong answer first.
    await tabTo(page, choices.nth(pos.wrong));
    await page.keyboard.press('Space');
    await expect(choices.nth(pos.wrong)).toHaveAttribute('aria-pressed', 'true');
    await expect(choices.nth(pos.wrong).locator('.sr-result')).toHaveText(/incorrect/);
    await expect(fb).toContainText('Not quite');

    // Then the right one. The wrong one must lose both its selected state and its hidden label.
    await tabTo(page, choices.nth(pos.right), { shift: pos.right < pos.wrong });
    await page.keyboard.press('Space');
    await expect(choices.nth(pos.right)).toHaveAttribute('aria-pressed', 'true');
    await expect(choices.nth(pos.wrong)).toHaveAttribute('aria-pressed', 'false');
    await expect(choices.nth(pos.wrong).locator('.sr-result')).toHaveCount(0);
    await expect(host.locator('.sr-result')).toHaveCount(1);
    await expect(host.locator('.sr-result')).toHaveText(/Correct answer/);
    await expect(host.locator('.sr-result', { hasText: /incorrect/ })).toHaveCount(0);
    await expect(fb).toContainText('That’s it');
    expect(problems.list()).toEqual([]);
  });

  test('companion: Tab to Next and press Enter; focus lands on the new heading, on screen', async ({ page }) => {
    await openCompanion(page, 'bacteria1');
    const before = await page.evaluate(() => FLOW[current].key);
    await tabTo(page, page.locator('.section.active .pager .btn', { hasText: /^Next/ }));
    await page.keyboard.press('Enter');
    expect(await page.evaluate(() => FLOW[current].key)).not.toBe(before);
    const h = page.locator('.section.active h1, .section.active h2').first();
    await expect(h).toBeFocused();
    await expectOnScreen(page, h);
  });

  for (const unlocked of [false, true]) {
    test('final exam (' + (unlocked ? 'unlocked' : 'locked') + '): navigation focuses a heading you can actually see', async ({ page }) => {
      await openCompanion(page, 'bacteria1');
      if (unlocked) {
        // Setup shortcut: pretend every earlier module is complete, so the lock card is hidden.
        await page.evaluate(() => { window.moduleLocked = () => false; refreshLocks(); });
      }
      const finalKey = await page.evaluate(() => FLOW[FLOW.length - 1].key);
      // Arrive the way a keyboard user would: Tab to the module's title in the sidebar, press Enter.
      await openMenuIfFolded(page);
      const entry = page.locator('#nav .mod-head', { hasText: 'Final Mastery Exam' });
      await tabTo(page, entry);
      await page.keyboard.press('Enter');
      expect(await page.evaluate(() => FLOW[current].key)).toBe(finalKey);

      const info = await page.evaluate(() => {
        const a = document.activeElement;
        return { tag: a.tagName, shown: MCA11y.isShown(a), inActive: !!a.closest('.section.active'),
                 inLock: !!a.closest('.lock-card'), text: a.textContent.trim().slice(0, 40) };
      });
      expect(/^H[1-3]$/.test(info.tag), 'focus is on a heading, got ' + info.tag).toBe(true);
      expect(info.shown, 'focused heading is visible').toBe(true);
      expect(info.inActive).toBe(true);
      expect(info.inLock, unlocked ? 'must not be the hidden lock card' : 'the visible lock card heading').toBe(!unlocked);
      await expectOnScreen(page, page.locator(':focus'));
    });
  }

  test('companion quiz: wrong answers, submit, remediation, and return — Tab and Shift+Tab only', async ({ page }) => {
    const problems = watch(page);
    await openCompanion(page, 'bacteria1');
    const quizKey = await page.evaluate(() => Object.keys(QUIZ_KEY_FOR_SECTION)[0]);
    await page.goto('/bacteria1.html?s=' + quizKey);
    await page.waitForFunction(() => typeof FLOW !== 'undefined' && document.querySelector('.section.active .q'));
    const sec = page.locator('.section.active');

    // Submitting with nothing answered sends the cursor to the first unanswered question.
    await tabTo(page, sec.locator('.q-submit'));
    await page.keyboard.press('Enter');
    await expect(sec.locator('.q').first()).toBeFocused();
    await expect(sec.locator('.q-warn')).toContainText('still need');

    // Answer every question with a KNOWN WRONG option, using Tab to reach each one.
    const qs = sec.locator('.q');
    const total = await qs.count();
    expect(total).toBeGreaterThan(0);
    for (let i = 0; i < total; i++) {
      const pos = await optionPositions(qs.nth(i), 'quiz');
      expect(pos.right).toBeGreaterThanOrEqual(0);
      const b = qs.nth(i).locator('.choice').nth(pos.wrong);
      await tabTo(page, b);
      await page.keyboard.press('Space');
      await expect(b).toHaveAttribute('aria-pressed', 'true');
      await expect(qs.nth(i).locator('.choice[aria-pressed="true"]')).toHaveCount(1);
    }

    await tabTo(page, sec.locator('.q-submit'));
    await page.keyboard.press('Enter');
    const result = sec.locator('.q-result');
    await expect(result).toBeFocused();
    await expectOnScreen(page, result);
    await expect(result).toHaveAttribute('aria-label', 'Quiz result');
    await expect(sec.locator('.q .choice.wrong .sr-result').first()).toHaveText(/incorrect/);
    await expect(sec.locator('.q .choice.right .sr-result').first()).toHaveText(/Correct answer/);

    // Remediation is REQUIRED here: every answer was wrong, so the review panel must offer a way in.
    const open = result.locator('.review-panel button', { hasText: /^Open the/ });
    expect(await open.count(), 'a remediation button exists').toBeGreaterThan(0);
    const startKey = await page.evaluate(() => FLOW[current].key);
    await tabTo(page, open);
    await page.keyboard.press('Enter');
    expect(await page.evaluate(() => FLOW[current].key)).not.toBe(startKey);

    // The way back is reachable with Shift+Tab from where focus landed, and it works.
    const back = page.locator('#mc-return');
    await expect(back).toBeVisible();
    await tabTo(page, back, { shift: true });
    await page.keyboard.press('Enter');
    expect(await page.evaluate(() => FLOW[current].key)).toBe(startKey);
    await expect(sec.locator('.q-result')).toBeFocused();
    await expectOnScreen(page, sec.locator('.q-result'));   // results are below the questions
    await expect(page.locator('#mc-return')).toHaveCount(0);
    expect(problems.list()).toEqual([]);
  });
});
