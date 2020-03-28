/** @format */

const { execSync } = require('child_process');

let devServer = null;
const runDevServer = ({ cwd, blockName, port = 5000 }) => {
  return new Promise(async (resolve, reject) => {
    const command = `PAGES_PATH=${blockName}/src BABEL_CACHE=none HMR=none CSS_COMPRESS=none MOCK=none BROWSER=none npm run build`;
    const devServerUrl = `http://localhost:${port}`;
    devServer = execSync(`${command} -- --port ${port}`, { cwd });
    console.log(blockName);
    resolve(devServerUrl);
  });
};

module.exports = { runDevServer };
