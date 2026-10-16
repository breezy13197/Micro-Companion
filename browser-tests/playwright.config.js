// @ts-check
const { defineConfig, devices } = require('@playwright/test');

const PORT = Number(process.env.PORT || 4173);

module.exports = defineConfig({
  testDir: './tests',
  timeout: 60000,
  expect: { timeout: 7000 },
  fullyParallel: true,
  retries: process.env.CI ? 1 : 0,
  reporter: [['list'], ['html', { open: 'never' }], ['./summary-reporter.js']],
  use: {
    baseURL: 'http://localhost:' + PORT,
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure'
  },
  // Starts the little web server before the tests and stops it afterwards.
  webServer: {
    command: 'node static-server.js',
    port: PORT,
    reuseExistingServer: !process.env.CI,
    env: { PORT: String(PORT) }
  },
  // Each "project" is one browser. Chromium covers Chrome and Edge,
  // WebKit covers Safari, Firefox covers Firefox. The two "mobile"
  // projects pretend to be a phone (small screen, touch, phone browser).
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
    { name: 'webkit', use: { ...devices['Desktop Safari'] } },
    { name: 'mobile-chrome', use: { ...devices['Pixel 7'] } },
    { name: 'mobile-safari', use: { ...devices['iPhone 14'] } }
  ]
});
