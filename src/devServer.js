const { exec } = require('child_process');

let devServer = null;
const runDevServer = ({ cwd, blockName, port = 1234 }) => {
  return new Promise(async (resolve, reject) => {
    const command = `PAGES_PATH=${blockName}/src BROWSER=none npm run dev`;

    const devServerUrl = `http://localhost:${port}`;
    devServer = exec(`${command} -- --port ${port}`, { cwd });
    devServer.stdout.on('data', data => {
      if (/DONE/.test(data.toString())) {
        resolve(devServerUrl);
      }
    });
    process.on('SIGINT', () => {
      if (devServer !== null) {
        devServer.kill('SIGINT');
        devServer = null;
      }
    });
  });
};

const killDevServer = () => {
  if (devServer !== null) {
    devServer.kill('SIGINT');
    devServer = null;
  }
};

module.exports = { runDevServer, killDevServer };
