const { expect } = require('@playwright/test');

const fs = require('fs');
const path = require('path');

/* The list of companions is read from the real files, so adding
   viruses6.html or bacteria5.html (or removing one) needs no change here.
   Anything in the main folder named bacteriaN.html or virusesN.html counts. */
const siteRoot = path.resolve(__dirname, '..', '..');
const COMPANIONS = fs.readdirSync(siteRoot)
  .map(f => f.match(/^((?:bacteria|viruses)(\d+))\.html$/))
  .filter(Boolean)
  .sort((a, b) => a[1].replace(/\d+$/, '').localeCompare(b[1].replace(/\d+$/, '')) || Number(a[2]) - Number(b[2]))
  .map(m => m[1]);

/* The hub writes the count as a word up to ten ("Eight companions.") and as a
   number after that. This builds the same sentence from the number of files. */
const NUMBER_WORDS = ['No', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten'];
const COUNT_TEXT = COMPANIONS.length === 1
  ? 'One companion.'
  : (NUMBER_WORDS[COMPANIONS.length] || COMPANIONS.length) + ' companions.';


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

module.exports = { COMPANIONS, COUNT_TEXT, watchProblems, openCompanion, hasSidewaysScroll, solveCheckpoint };
