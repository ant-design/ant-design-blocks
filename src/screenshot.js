const { runDevServer, killDevServer } = require('./devServer');
const puppeteer = require('puppeteer');
const path = require('path');

let browser = null;
let page = null;

const openBrowser = async () => {
  browser = await puppeteer.launch({
    headless: true,
    args: [
      '--disable-gpu',
      '--disable-dev-shm-usage',
      '--no-first-run',
      `–disable-setuid-sandbox`,
      '--no-zygote',
      '--no-sandbox',
      `–single-process`
    ]
  });
  page = await browser.newPage();
};

const screenshot = async (blockName, blockDir, rootDir, width, height) => {
  const imagePath = path.join(blockDir, 'snapshot.png');
  const devServerUrl = await runDevServer({
    cwd: rootDir,
    blockName
  });
  await page.goto(devServerUrl);
  await page.setViewport({
    width,
    height,
  });
  await page.screenshot({
    path: imagePath
  });
  await killDevServer();
};

const closeBrowser = async () => {
  if (browser !== null) {
    browser.close();
  }
};

module.exports = { screenshot, openBrowser, closeBrowser };
