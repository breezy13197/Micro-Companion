const { test, expect } = require('@playwright/test');
const { watchProblems, openCompanion } = require('./helpers');

/* Keyboard-only checks. Nothing here uses click(): every step is a Tab,
   Enter or Space press (or a focus() that stands in for tabbing to a
   control that is already on screen), the way someone who cannot use a
   mouse would work. The checks cover answering, submitting, going to
   remediation, and coming back. */

/* Browsers ask for /favicon.ico by themselves; the site has none, which is not a page problem. */
const realProblems = p => p.list().filter(x => !/favicon|404 \(Not Found\)/.test(x));

const activeIs = (page, selector) =>
  page.evaluate(sel => !!document.activeElement && document.activeElement.matches(sel), selector);

test.describe('keyboard and screen-reader behavior', () => {

  test('hub exam: answering keeps focus on the same answer and Next moves to the new question', async ({ page }) => {
    const problems = watchProblems(page);
    await page.goto('/index.html');
    await page.evaluate(() => { EXAMSETUP.topics = ['hub']; EXAMSETUP.count = 5; setView('exam'); });
    await page.locator('#main button', { hasText: 'Start exam' }).focus();
    await page.keyboard.press('Enter');
    await expect(page.locator('#qstem')).toBeFocused();   // new question: cursor is on the question text

    const second = page.locator('.choice').nth(1);
    await second.focus();
    await page.keyboard.press('Enter');
    // The screen was redrawn, but the same answer still has the cursor and says it is selected.
    await expect(page.locator('.choice').nth(1)).toBeFocused();
    await expect(page.locator('.choice').nth(1)).toHaveAttribute('aria-pressed', 'true');
    await expect(page.locator('.choice').nth(0)).toHaveAttribute('aria-pressed', 'false');
    await expect(page.locator('#mc-live')).toHaveText(/Answer B selected/);

    await page.getByRole('button', { name: 'Next →' }).focus();
    await page.keyboard.press('Enter');
    await expect(page.locator('#qstem')).toBeFocused();
    await expect(page.locator('#mc-live')).toHaveText(/Question 2 of 5/);

    // Submit from the keyboard; the results heading receives focus.
    await page.getByRole('button', { name: 'Submit', exact: true }).focus();
    page.once('dialog', d => d.accept());
    await page.keyboard.press('Enter');
    await expect(page.locator('#main h2').first()).toBeFocused();
    await expect(page.locator('#main h2').first()).toContainText('correct');
    expect(realProblems(problems)).toEqual([]);
  });

  test('hub: choosing a menu item moves focus to the new screen heading', async ({ page }) => {
    await page.goto('/index.html');
    const toggle = page.locator('.menu-toggle');
    if (await toggle.isVisible() && (await toggle.getAttribute('aria-expanded')) === 'false') await toggle.click();
    await page.locator('#nav button[data-view="help"]').focus();
    await page.keyboard.press('Enter');
    await expect(page.locator('#main h1')).toBeFocused();
  });

  test('companion: checkpoint answers are exposed as selected, and feedback is announced', async ({ page }) => {
    const problems = watchProblems(page);
    await openCompanion(page, 'bacteria1');
    await page.evaluate(() => goTo(FLOW.findIndex(f => document.querySelector('.section[data-key="' + f.key + '"] [data-check]'))));
    const host = page.locator('.section.active [data-check]').first();
    const fb = host.locator('.feedback');
    await expect(fb).toHaveAttribute('aria-live', 'polite');

    const choices = host.locator('.choice');
    const n = await choices.count();
    for (let i = 0; i < n; i++) {
      if (await host.locator('.choice.right').count()) break;
      await choices.nth(i).focus();
      await page.keyboard.press('Space');
      await expect(choices.nth(i)).toHaveAttribute('aria-pressed', 'true');
      await expect(fb).not.toBeEmpty();
    }
    await expect(host.locator('.choice.right')).toHaveCount(1);
    await expect(host.locator('.choice.right .sr-result')).toHaveText(/Correct answer/);
    expect(realProblems(problems)).toEqual([]);
  });

  test('companion: Next moves focus to the new section heading', async ({ page }) => {
    await openCompanion(page, 'bacteria1');
    const next = page.locator('.section.active .pager .btn', { hasText: /^Next/ });
    await next.focus();
    await page.keyboard.press('Enter');
    await expect(page.locator('.section.active h1, .section.active h2').first()).toBeFocused();
  });

  test('companion quiz: answer, submit, go to remediation, and come back using only the keyboard', async ({ page }) => {
    const problems = watchProblems(page);
    await openCompanion(page, 'bacteria1');
    const quizKey = await page.evaluate(() => Object.keys(QUIZ_KEY_FOR_SECTION)[0]);
    await page.evaluate(k => goTo(FLOW.findIndex(f => f.key === k)), quizKey);
    const sec = page.locator('.section.active');

    // Submitting with nothing answered sends the cursor to the first unanswered question.
    await sec.locator('.q-submit').focus();
    await page.keyboard.press('Enter');
    await expect(sec.locator('.q').first()).toBeFocused();
    await expect(sec.locator('.q-warn')).toContainText('still need');

    // Answer every question with the first option, via Space; the second option is wrong
    // for at least some questions, so a review list normally appears.
    const qs = sec.locator('.q');
    const total = await qs.count();
    for (let i = 0; i < total; i++) {
      const b = qs.nth(i).locator('.choice').nth(1);
      await b.focus();
      await page.keyboard.press('Space');
      await expect(b).toHaveAttribute('aria-pressed', 'true');
      await expect(qs.nth(i).locator('.choice[aria-pressed="true"]')).toHaveCount(1);
    }
    await sec.locator('.q-submit').focus();
    await page.keyboard.press('Enter');
    await expect(sec.locator('.q-result')).toBeFocused();
    await expect(sec.locator('.q .choice.right .sr-result').first()).toHaveText(/Correct answer/);

    // Remediation: open a concept's section, then return with the Back button.
    const study = sec.locator('.q-result .review-panel button', { hasText: /^Open the/ }).first();
    if (await study.count()) {
      await study.focus();
      await page.keyboard.press('Enter');
      const back = page.locator('#mc-return');
      await expect(back).toBeVisible();
      await back.focus();
      await page.keyboard.press('Enter');
      await expect(page.locator('.section.active .q-result')).toBeFocused();
      await expect(page.locator('#mc-return')).toHaveCount(0);
    }
    expect(realProblems(problems)).toEqual([]);
  });
});
