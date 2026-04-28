const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:8080');
  await page.waitForLoadState('networkidle');

  const rootRect = await page.evaluate(() => document.getElementById('root').getBoundingClientRect());
  const headerRect = await page.evaluate(() => document.querySelector('.header').getBoundingClientRect());
  
  console.log('Root rect:', rootRect);
  console.log('Header rect:', headerRect);

  // Find all elements above the header
  const elements = await page.evaluate(() => {
    const header = document.querySelector('.header');
    let current = header.previousElementSibling;
    const prevElements = [];
    while (current) {
      prevElements.push({
        tagName: current.tagName,
        className: current.className,
        rect: current.getBoundingClientRect(),
        id: current.id
      });
      current = current.previousElementSibling;
    }
    return prevElements;
  });
  
  console.log('Elements before header:', elements);

  await browser.close();
})();
