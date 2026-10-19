const { test, expect } = require('@playwright/test');
const path = require('path');
const { pathToFileURL } = require('url');
const { COMPANIONS, watchProblems, COUNT_TEXT } = require('./helpers');

/* The README tells people to "open index.html in a browser", which means
   the address starts with file:// and there is no web server. Browsers are
   stricter about some things in that mode (for example saving data), so
   it is tested separately. */
const root = path.resolve(__dirname, '..', '..');
const fileUrl = name => pathToFileURL(path.join(root, name)).href;

test.describe('opened straight from disk (file://)', () => {

  test('the hub loads and finds every companion', async ({ page }) => {
    const problems = watchProblems(page);
    await page.goto(fileUrl('index.html'));
    await expect(page.locator('#main')).toContainText(COUNT_TEXT);
    await expect(page.locator('#main .note.bad')).toHaveCount(0);
    expect(problems.list()).toEqual([]);
  });

  for (const id of COMPANIONS) {
    test(id + ' loads and builds its menu', async ({ page }) => {
      const problems = watchProblems(page);
      await page.goto(fileUrl(id + '.html'));
      await page.waitForFunction(() => typeof FLOW !== 'undefined' && document.querySelectorAll('#nav > *').length > 0);
      await expect(page.locator('#ringPct')).toHaveText('0%');
      // Some browsers refuse to save data for file:// pages. The page must
      // either save or say clearly that it cannot; it must never just break.
      const saves = await page.evaluate(() => storageWorks);
      if (!saves) await expect(page.locator('#topMeta')).toContainText('blocking saved progress');
      expect(problems.list()).toEqual([]);
    });
  }

  test('Back to hub leads from a companion to the hub', async ({ page }) => {
    await page.goto(fileUrl('viruses3.html'));
    await page.waitForFunction(() => typeof FLOW !== 'undefined');
    await page.locator('.back-to-hub').click();
    await expect(page).toHaveURL(/index\.html$/);
    await expect(page.locator('#main')).toContainText(COUNT_TEXT);
  });
});
