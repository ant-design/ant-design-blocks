const fs = require('fs-extra');
const path = require('path');
const { parseJSX, parseStyle } = require('../src/parse');

describe('test parseJSX', () => {
  test('style tag', async () => {
    const jsxFilePath = path.join(__dirname, 'styleTagjsx.txt');
    const mdFilePath = path.join(__dirname, 'styleTag.md');
    const text = await fs.readFile(mdFilePath, 'utf8');
    const targetJsx = await fs.readFile(jsxFilePath, 'utf8');
    const jsx = parseJSX(text);
    expect(jsx).toBe(targetJsx);
  });

  test('css mark', async () => {
    const jsxFilePath = path.join(__dirname, 'cssMarkjsx.txt');
    const mdFilePath = path.join(__dirname, 'cssMark.md');
    const text = await fs.readFile(mdFilePath, 'utf8');
    const targetJsx = await fs.readFile(jsxFilePath, 'utf8');
    const jsx = parseJSX(text);
    expect(jsx).toBe(targetJsx);
  });
});

describe('test parseStyle', () => {
  test('style tag', async () => {
    const lessFilePath = path.join(__dirname, 'styleTagless.txt');
    const mdFilePath = path.join(__dirname, 'styleTag.md');
    const text = await fs.readFile(mdFilePath, 'utf8');
    const targetless = await fs.readFile(lessFilePath, 'utf8');
    const less = parseStyle(text);
    expect(less).toBe(targetless);
  });

  test('css mark', async () => {
    const lessFilePath = path.join(__dirname, 'cssMarkless.txt');
    const mdFilePath = path.join(__dirname, 'cssMark.md');
    const text = await fs.readFile(mdFilePath, 'utf8');
    const targetless = await fs.readFile(lessFilePath, 'utf8');
    const less = parseStyle(text);
    expect(less).toBe(targetless);
  });
});
