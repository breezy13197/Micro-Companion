const { expect } = require('@playwright/test');

const COMPANIONS = [
  'bacteria1', 'bacteria2', 'bacteria3', 'bacteria4',
  'viruses1', 'viruses2', 'viruses3', 'viruses4'
];

/* Starts listening for anything that goes wrong on a page: JavaScript
   errors, console errors, files that failed to load, and 404/500 replies.
   Call it BEFORE page.goto(), then call problems.list() afterwards. */
function watchProblems(page) {
  const found = [];
  page.on('pageerror', e => found.push('JS error: ' + e.message));
  page.on('console', m => { if (m.type() === 'error') found.push('Console error: ' + m.text()); });
  page.on('requestfailed', r => found.push('Failed to load: ' + r.url() + ' (' + (r.failure() && r.failure().errorText) + ')'));
  page.on('response', r => { if (r.status() >= 400) found.push('HTTP ' + r.status() + ': ' + r.url()); });
  return { list: () => found };
}

/* Opens a companion and waits until its scripts have finished building the page. */
async function openCompanion(page, id, path) {
  await page.goto((path || '') + '/' + id + '.html');
  await page.waitForFunction(() => typeof FLOW !== 'undefined' && document.querySelectorAll('#nav > *').length > 0);
}

/* True if the page can be scrolled sideways (usually a sign something is too wide). */
function hasSidewaysScroll(page) {
  return page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth + 1);
}

/* Answers a checkpoint by clicking its choices one by one until the right one locks. */
async function solveCheckpoint(page, host) {
  const choices = host.locator('.choice');
  const n = await choices.count();
  for (let i = 0; i < n; i++) {
    if (await host.locator('.choice.right').count()) break;
    await choices.nth(i).click();
  }
  await expect(host.locator('.choice.right')).toHaveCount(1);
}

module.exports = { COMPANIONS, watchProblems, openCompanion, hasSidewaysScroll, solveCheckpoint };
