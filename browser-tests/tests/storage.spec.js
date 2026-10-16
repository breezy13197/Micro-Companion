const { test, expect } = require('@playwright/test');
const { watchProblems, openCompanion, solveCheckpoint } = require('./helpers');

/* Pretends the browser is blocking saved data, as private/incognito
   windows and strict privacy settings do. Any attempt to use
   localStorage throws, which is what those browsers do. */
async function blockStorage(page) {
  await page.addInitScript(() => {
    const deny = () => { throw new DOMException('The operation is insecure.', 'SecurityError'); };
    Object.defineProperty(window, 'localStorage', { configurable: true, get: deny });
  });
}

test.describe('when the browser blocks saved progress', () => {

  test('a companion still works and tells the student progress will not be kept', async ({ page }) => {
    const problems = watchProblems(page);
    await blockStorage(page);
    await openCompanion(page, 'bacteria1');
    await expect(page.locator('#topMeta')).toContainText('blocking saved progress');

    // Answering still works during the visit.
    const found = await page.evaluate(() => {
      const host = document.querySelector('[data-check]');
      return { check: host.dataset.check, index: FLOW.findIndex(f => f.key === host.closest('section.section').dataset.key) };
    });
    await page.evaluate(n => goTo(n), found.index);
    const host = page.locator('[data-check="' + found.check + '"]');
    const box = (await host.evaluate(h => h.classList.contains('choices'))) ? host : host.locator('.choices');
    await solveCheckpoint(page, box);
    expect(await page.evaluate(c => state.checks[c] !== undefined, found.check)).toBe(true);
    expect(problems.list()).toEqual([]);
  });

  test('the hub shows a warning instead of failing', async ({ page }) => {
    const problems = watchProblems(page);
    await blockStorage(page);
    await page.goto('/index.html');
    await expect(page.locator('#main .note.warn')).toContainText('blocking saved progress');
    await expect(page.locator('#main')).toContainText('Eight companions');
    expect(problems.list()).toEqual([]);
  });
});

test.describe('saved progress', () => {

  test('is kept separately for each companion', async ({ page }) => {
    await openCompanion(page, 'bacteria1');
    await page.evaluate(() => Act.solveAll());
    await openCompanion(page, 'bacteria2');
    expect(await page.evaluate(() => Object.keys(state.activities).filter(k => !/_v$/.test(k)))).toEqual([]);
    const keys = await page.evaluate(() => Object.keys(localStorage).filter(k => k.startsWith('companion.')).sort());
    expect(keys).toEqual(['companion.bacteria1.v1', 'companion.bacteria2.v1']);
  });

  test('"Clear my saved progress" really clears it', async ({ page }) => {
    await openCompanion(page, 'viruses1');
    await page.evaluate(() => Act.solveAll());
    expect(await page.evaluate(() => Object.keys(state.activities).filter(k => !/_v$/.test(k)).length)).toBeGreaterThan(0);

    page.on('dialog', d => d.accept()); // the page asks "are you sure?"
    // On a phone the reset button lives inside the folded-away menu.
    const toggle = page.locator('.menu-toggle');
    if (await toggle.isVisible()) await toggle.click();
    await page.locator('#resetBtn').click();
    await page.waitForFunction(() => typeof FLOW !== 'undefined');
    expect(await page.evaluate(() => Object.keys(state.activities).filter(k => !/_v$/.test(k)))).toEqual([]);
    await expect(page.locator('#ringPct')).toHaveText('0%');
  });
});
