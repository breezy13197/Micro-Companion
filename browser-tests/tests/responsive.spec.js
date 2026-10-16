const { test, expect } = require('@playwright/test');
const { COMPANIONS, openCompanion, hasSidewaysScroll } = require('./helpers');

/* Sizes that stand for real devices. The menu folds away at 900px
   (companions) and 1080px (hub), so each side of those lines is tested. */
const SIZES = [
  { name: 'small phone', width: 360, height: 740, folded: true },
  { name: 'large phone', width: 430, height: 932, folded: true },
  { name: 'tablet portrait', width: 768, height: 1024, folded: true },
  { name: 'laptop', width: 1366, height: 768, folded: false }
];

for (const size of SIZES) {
  test.describe(size.name + ' (' + size.width + 'px wide)', () => {
    test.use({ viewport: { width: size.width, height: size.height } });

    test('hub: menu ' + (size.folded ? 'folds behind a button that works' : 'stays open'), async ({ page }) => {
      await page.goto('/index.html');
      await expect(page.locator('#main')).toContainText('Eight companions');
      const toggle = page.locator('.menu-toggle');
      if (size.folded && size.width <= 1080) {
        await expect(toggle).toBeVisible();
        await expect(page.locator('#nav')).toBeHidden();
        await toggle.click();
        await expect(toggle).toHaveAttribute('aria-expanded', 'true');
        await expect(page.locator('#nav')).toBeVisible();
        // Picking a menu item closes the menu again.
        await page.locator('#nav button[data-view="help"]').click();
        await expect(page.locator('#main')).toContainText('How this works');
        await expect(page.locator('#nav')).toBeHidden();
      } else {
        await expect(toggle).toBeHidden();
        await expect(page.locator('#nav')).toBeVisible();
      }
    });

    test('hub: every page fits the screen width', async ({ page }) => {
      await page.goto('/index.html');
      const toggle = page.locator('.menu-toggle');
      const tooWide = [];
      for (const view of ['dash', 'companions', 'exam', 'adaptive', 'cards', 'flagged', 'history', 'backup', 'help']) {
        if (await toggle.isVisible() && (await toggle.getAttribute('aria-expanded')) === 'false') await toggle.click();
        await page.locator('#nav button[data-view="' + view + '"]').click();
        if (await hasSidewaysScroll(page)) tooWide.push(view);
      }
      expect(tooWide, 'hub pages that scroll sideways').toEqual([]);
    });

    for (const id of COMPANIONS) {
      test(id + ': menu and layout fit the screen', async ({ page }) => {
        await openCompanion(page, id);
        const toggle = page.locator('.menu-toggle');
        if (size.width <= 900) {
          await expect(toggle).toBeVisible();
          // Touch targets should be at least 44px tall (Apple and Google guidance).
          const box = await toggle.boundingBox();
          expect(box.height).toBeGreaterThanOrEqual(43);
          await expect(page.locator('#nav')).toBeHidden();
          await toggle.click();
          await expect(page.locator('#nav')).toBeVisible();
          await toggle.click();
          await expect(page.locator('#nav')).toBeHidden();
        } else {
          await expect(toggle).toBeHidden();
          await expect(page.locator('#nav')).toBeVisible();
        }
        // The topic title and progress pill must still be readable.
        await expect(page.locator('#topTitle')).toBeVisible();
        await expect(page.locator('#topPill')).toBeVisible();
        expect(await hasSidewaysScroll(page)).toBe(false);
      });
    }
  });
}

test.describe('every section fits a small phone', () => {
  test.use({ viewport: { width: 360, height: 740 } });
  for (const id of COMPANIONS) {
    test(id, async ({ page }) => {
      await openCompanion(page, id);
      const n = await page.evaluate(() => FLOW.length);
      const wide = [];
      for (let i = 0; i < n; i++) {
        await page.evaluate(k => goTo(k), i);
        if (await hasSidewaysScroll(page)) wide.push(await page.evaluate(k => FLOW[k].key, i));
      }
      expect(wide, 'sections that scroll sideways at 360px').toEqual([]);
    });
  }
});
