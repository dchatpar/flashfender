
const { chromium } = require('playwright-core');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://www.flashfender.com/features');
  await page.screenshot({ path: '/home/developer/websites/flashfenderfinal/features.png', fullPage: true });
  await browser.close();
})();
