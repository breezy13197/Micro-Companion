const { test, expect } = require('@playwright/test');
const { COMPANIONS, watchProblems, openCompanion } = require('./helpers');

const VIEWS = {
  dash: 'Dashboard', companions: 'My companions', exam: 'Build an exam',
  adaptive: 'Adaptive review', cards: 'Flashcards', flagged: 'Flagged questions',
  history: 'Past results', backup: 'Save & load your progress', help: 'How this works'
};

/* On a phone the menu is folded away until the Menu button is pressed. */
async function openHubView(page, view) {
  const toggle = page.locator('.menu-toggle');
  if (await toggle.isVisible() && (await toggle.getAttribute('aria-expanded')) === 'false') await toggle.click();
  await page.locator('#nav button[data-view="' + view + '"]').click();
}

test.describe('hub (index.html)', () => {

  test('loads cleanly with all eight companions on the dashboard', async ({ page }) => {
    const problems = watchProblems(page);
    await page.goto('/index.html');
    await expect(page).toHaveTitle(/Microbiology Study Hub/);
    await expect(page.locator('#main')).toContainText('Eight companions');
    for (const name of ['Bacteria I', 'Bacteria II', 'Bacteria III', 'Bacteria IV',
                        'Viruses I', 'Viruses II', 'Viruses III', 'Viruses IV']) {
      await expect(page.locator('#main')).toContainText(name);
    }
    expect(problems.list()).toEqual([]);
  });

  test('every menu item opens its page without errors', async ({ page }) => {
    const problems = watchProblems(page);
    await page.goto('/index.html');
    for (const [view, title] of Object.entries(VIEWS)) {
      await openHubView(page, view);
      await expect(page.locator('#main'), view).toContainText(title);
    }
    expect(problems.list()).toEqual([]);
  });

  test('the health check lists every question bank as loaded', async ({ page }) => {
    await page.goto('/index.html');
    await openHubView(page, 'help');
    const chips = page.locator('#main table.tbl tr td:nth-child(5) .chip');
    await expect(chips).toHaveCount(9);
    const texts = await chips.allTextContents();
    expect(texts.filter(t => t === 'manifest loaded')).toHaveLength(8);
    expect(texts.filter(t => t === 'not needed')).toHaveLength(1);
    await expect(page.locator('#main .note.bad')).toHaveCount(0);
  });

  test('companions are locked for hub exams until finished', async ({ page }) => {
    await page.goto('/index.html');
    await openHubView(page, 'exam');
    await expect(page.locator('#main')).toContainText(/locked/i);
  });

  test('progress made in a companion shows up in the hub, and Back to hub works', async ({ page }) => {
    await page.goto('/index.html');
    await expect(page.locator('#main')).toContainText(/start here\s*·\s*bacteria i/i);

    await openCompanion(page, 'bacteria1');
    await page.evaluate(() => Act.solveAll());
    await page.locator('.back-to-hub').click(); // on a phone this link stays visible too
    await page.waitForURL(/index\.html$/);
    await expect(page.locator('#main')).toContainText(/continue\s*·\s*bacteria i/i);
  });

  test('a backup file can be downloaded and loaded back in', async ({ page }) => {
    const problems = watchProblems(page);
    await page.goto('/index.html');
    await openHubView(page, 'backup');
    await page.getByLabel('Backup label').fill('Test Student');

    const [download] = await Promise.all([
      page.waitForEvent('download'),
      page.getByRole('button', { name: 'Download backup file' }).click()
    ]);
    expect(download.suggestedFilename()).toMatch(/^microbiology-progress.*\.json$/);
    const path = await download.path();
    const text = require('fs').readFileSync(path, 'utf8');
    expect(() => JSON.parse(text)).not.toThrow();

    await page.getByLabel('Choose a backup file').setInputFiles({
      name: 'backup.json', mimeType: 'application/json', buffer: Buffer.from(text)
    });
    await expect(page.locator('#main')).toContainText('Backup: “Test Student”');
    expect(problems.list()).toEqual([]);
  });

  test('a file that is not a backup is refused politely', async ({ page }) => {
    await page.goto('/index.html');
    await openHubView(page, 'backup');
    await page.getByLabel('Choose a backup file').setInputFiles({
      name: 'nope.json', mimeType: 'application/json', buffer: Buffer.from('this is not json')
    });
    await expect(page.locator('#main .note.bad')).toBeVisible();
  });
});
