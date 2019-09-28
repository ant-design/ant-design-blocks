const { runDevServer, killDevServer } = require('./devServer');
const puppeteer = require('puppeteer-core');
const path = require('path');
const findChrome = require('./find_chrome');

let browser = null;
let page = null;

const openBrowser = async () => {
  try {
    const { executablePath } = await findChrome({});
    browser = await puppeteer.launch({
      executablePath,
      headless: false,
      args: [
        '--disable-gpu',
        '--disable-dev-shm-usage',
        '--no-first-run',
        '--disable-setuid-sandbox',
        '--no-zygote',
        '--no-sandbox',
        '--single-process',
      ],
    });
    console.log(browser);
    page = await browser.newPage();
  } catch (error) {
    console.log(error);
  }
};

const screenshot = async (blockName, blockDir, rootDir, width, height) => {
  const imagePath = path.join(blockDir, 'snapshot.png');
  const devServerUrl = await runDevServer({
    cwd: rootDir,
    blockName,
  });
  await page.goto(devServerUrl);
  await page.evaluate(() => {
    document.body.style.padding = '24px';
    const root = document.getElementById('root');
    root.style.border = '1px solid #ddd';
    root.style.height = '100%';
    root.style.width = '100%';
    root.style.padding = '24px';
    root.style.position = 'relative';
    root.style.transform = 'scale(1, 1)';
  });

  await page.setViewport({
    width: width + 56,
    height: height + 56,
  });
  await page.screenshot({
    path: imagePath,
  });
  await killDevServer();
};

const closeBrowser = async () => {
  if (browser !== null) {
    browser.close();
  }
};

module.exports = { screenshot, openBrowser, closeBrowser };
