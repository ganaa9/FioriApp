const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch(); // Lance le navigateur en mode headless par défaut
    const page = await browser.newPage();
    await page.goto('https://example.com');
    // Ajoutez vos tests ici
    await browser.close();
})();
