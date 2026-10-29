const { test, expect } = require('@playwright/test');
const { watchProblems, openCompanion, solveCheckpoint, COUNT_TEXT } = require('./helpers');

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
    await expect(page.locator('#main')).toContainText(COUNT_TEXT);
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

/* Storage that passes the start-up check and then fills up: writes of
   anything but the test key start throwing once `full` is set. */
async function fillStorageLater(page) {
  await page.addInitScript(() => {
    window.__full = false;
    const real = Storage.prototype.setItem;
    Storage.prototype.setItem = function (k, v) {
      if (window.__full && k !== '__t') throw new DOMException('quota', 'QuotaExceededError');
      return real.call(this, k, v);
    };
  });
}

test.describe('when saving fails after the page has loaded', () => {

  test('a companion shows a lasting warning and returns false from saveState', async ({ page }) => {
    await fillStorageLater(page);
    await openCompanion(page, 'bacteria1');
    expect(await page.evaluate(() => saveState())).toBe(true);
    await expect(page.locator('#saveWarning')).toHaveCount(0);
    await page.evaluate(() => { window.__full = true; });
    expect(await page.evaluate(() => saveState())).toBe(false);
    await expect(page.locator('#saveWarning')).toContainText('could not be saved');
    // The warning offers a downloadable backup of the in-memory session.
    const [dl] = await Promise.all([page.waitForEvent('download'), page.locator('#saveWarning button').click()]);
    expect(dl.suggestedFilename()).toContain('bacteria1');
    // It goes away once saving works again.
    await page.evaluate(() => { window.__full = false; });
    expect(await page.evaluate(() => saveState())).toBe(true);
    await expect(page.locator('#saveWarning')).toHaveCount(0);
  });

  test('restoring a backup reports failure and leaves existing progress untouched', async ({ page }) => {
    await fillStorageLater(page);
    await page.goto('/index.html');
    await page.evaluate(() => { localStorage.setItem('companion.bacteria1.v1', '{"checks":{"keep":1}}'); window.__full = true; });
    let msg = '';
    page.on('dialog', d => { msg = d.message(); d.accept(); });
    const result = await page.evaluate(() => applyBackup({
      companions: { bacteria1: '{"checks":{"new":1}}', bacteria2: '{"checks":{}}' }, hub: {}
    }));
    expect(result.failed).toBeTruthy();
    expect(msg).toContain('Restore failed');
    expect(await page.evaluate(() => localStorage.getItem('companion.bacteria1.v1'))).toBe('{"checks":{"keep":1}}');
  });
});

test.describe('shared storage code', () => {

  test('a backup downloaded from a companion can be loaded into the hub', async ({ page }) => {
    await openCompanion(page, 'bacteria1');
    await page.evaluate(() => Act.solveAll());
    const backup = await page.evaluate(() => {
      let captured = null;
      const real = MCStore.download;
      MCStore.download = (name, obj) => { captured = obj; };
      downloadSessionBackup();
      MCStore.download = real;
      return captured;
    });
    expect(backup.kind).toBe('micro-hub-backup');
    expect(Object.keys(backup.companions)).toEqual(['bacteria1']);

    await page.evaluate(() => localStorage.clear());
    await page.goto('/index.html');
    await page.evaluate(b => applyBackup(b), backup);
    const stored = await page.evaluate(() => localStorage.getItem('companion.bacteria1.v1'));
    expect(JSON.parse(stored).activities).toEqual(backup.companions.bacteria1 ? JSON.parse(backup.companions.bacteria1).activities : null);
  });

  test('the hub and a companion use the very same storage code', async ({ page }) => {
    await page.goto('/index.html');
    const hubSrc = await page.evaluate(() => MCStore.writeAll.toString() + MCStore.validateCompanionRaw.toString());
    await openCompanion(page, 'bacteria1');
    const compSrc = await page.evaluate(() => MCStore.writeAll.toString() + MCStore.validateCompanionRaw.toString());
    expect(hubSrc).toBe(compSrc);
  });
});
