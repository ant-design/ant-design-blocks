const fs = require('fs-extra');
const path = require('path');
const pLimit = require('p-limit');
const ora = require('ora');
require('events').EventEmitter.defaultMaxListeners = 0;
const {
  parseJSX,
  parseStyle,
  parseTitle,
  parseDesc,
  parseIsDebug
} = require('./parse');
const fetchAntDDemos = require('./fetchAntDDemos');
const { screenshot, openBrowser, closeBrowser } = require('./screenshot');

const limit = pLimit(1);
const blockTemplateDir = path.join(__dirname, '../assets/block-template');
const rootDir = path.join(__dirname, '..');
const spinner = ora();

const modifyPackageInfo = async (blockDir, name, description) => {
  const pkgFilePath = path.join(blockDir, 'package.json');
  const pkg = require(pkgFilePath);
  const json = {
    ...pkg,
    name: `@umi-block/${name}`,
    description
  };
  await fs.writeJSON(pkgFilePath, json);
};

const generateBlock = async (demoWithText, current, total) => {
  const { name, text } = demoWithText;
  // spinner.start(`(${current}/${total}) generate block ${name}`);

  const blockDir = path.join(rootDir, name);

  try {
    await fs.remove(blockDir);
  } catch (err) {
    console.log(err);
  }

  try {
    await fs.ensureDir(blockDir);
  } catch (err) {
    console.log(err);
  }

  try {
    await fs.copy(`${blockTemplateDir}`, `${blockDir}`);
  } catch (err) {
    console.log(err);
  }

  const jsxText = parseJSX(text);
  const cssText = parseStyle(text);
  const indexTSXPath = path.join(blockDir, 'src/index.tsx');
  const indexLessPath = path.join(blockDir, 'src/index.less');
  try {
    await fs.outputFile(indexTSXPath, jsxText);
    if (cssText !== null) {
      await fs.outputFile(indexLessPath, cssText);
    }
  } catch (err) {
    console.log(err);
  }

  const description = parseDesc(text);
  await modifyPackageInfo(blockDir, name, description);

  await screenshot(name, blockDir, rootDir);
};

const generateBlocks = async demosWithText => {
  await Promise.all(
    demosWithText.map((demoWithText, index) =>
      limit(() => generateBlock(demoWithText, index + 1, demosWithText.length))
    )
  );
  const total = demosWithText.length;
  spinner.succeed(`${total} blocks generated`);
};

const generateBlockList = async demosWithText => {
  spinner.start('generate blockList.json');
  const blockList = demosWithText.map(demoWithText => {
    const { name, componentName, mdBaseName, text } = demoWithText;
    const description = parseDesc(text);
    const demoTitle = parseTitle(text);
    const title = `${componentName}-${demoTitle}`;
    const img = `https://github.com/ant-design/ant-design-blocks/raw/master/${name}/snapshot.png`;
    const previewUrl = `https://ant.design/components/${componentName}-cn/#components-${componentName}-demo-${mdBaseName}`;
    const url = `https://github.com/ant-design/ant-design-blocks/tree/master/${name}`;
    const tags = [componentName, mdBaseName, demoTitle];
    return {
      title,
      value: name,
      key: name,
      description,
      url,
      type: 'block',
      path: name,
      isPage: false,
      defaultPath: `/${name}`,
      img,
      tags,
      name: title,
      previewUrl
    };
  });
  const blockListFilePath = path.join(rootDir, 'blockList.json');
  await fs.writeJSON(blockListFilePath, blockList);
  spinner.succeed();
};

const main = async () => {
  const demos = await fetchAntDDemos();

  if (demos.length <= 0) {
    console.error(
      'antd demos not found, please check ant-design submodule is existed!'
    );
    return;
  }

  let demosWithText = await Promise.all(
    demos.map(async demo => {
      const text = await fs.readFile(demo.filePath, 'utf8');
      return {
        ...demo,
        text
      };
    })
  );

  demosWithText = demosWithText.filter(demo => !parseIsDebug(demo.text));

  await openBrowser();

  await generateBlocks(demosWithText);

  await generateBlockList(demosWithText);

  await closeBrowser();
};

main();
