const prettier = require('prettier');

const JSX_SCRIPT = /```jsx\n*(.*?(?=```))/is;
const STYLE_TAG_SCRIPT = /<style>\n*(.*(?=<\/style>))/is;
const CSS_MARK_SCRIPT = /```css\n*(.*?(?=```))/is;
const TITLE_SCRIPT = /title:\s*zh-CN: (.*)/i;
const DESC_SCRIPT = /## zh-CN\n\n(.*)(?=\n\n## en-US)/is;
const DEBUG_SCRIPT = /debug: true.*(?=---)/is;
const COMPONENT_TYPE_SCRIPT = /\ntype: (.*)(?=\n)/i;

const parseJSX = text => {
  let jsxText = null;
  const result = text.match(JSX_SCRIPT);
  if (result && result.length > 0) {
    jsxText = result[1];
  }
  jsxText = jsxText.replace(
    /ReactDOM.render\((.*),.*mountNode.*\)/is,
    (match, key) => {
      return `export default () => ${key}`;
    }
  );

  // TODO: import-sort
  jsxText = `import React from 'react';\n${jsxText}`;

  return jsxText;
};

const parseStyle = text => {
  let cssText = null;
  const result1 = text.match(STYLE_TAG_SCRIPT);
  if (result1 && result1.length > 0) {
    cssText = result1[1];
  }

  if (cssText === null) {
    const result2 = text.match(CSS_MARK_SCRIPT);
    if (result2 && result2.length > 0) {
      cssText = result2[1];
    }
  }

  if (cssText !== null) {
    cssText = `.card {\n  :global {\n    ${cssText}\n  }\n}`;
    cssText = prettier.format(cssText, { parser: 'less' });
  }

  return cssText;
};

const parseTitle = text => {
  let title = '';
  const result = text.match(TITLE_SCRIPT);
  if (result && result.length > 0) {
    title = result[1];
  }
  return title;
};

const parseDesc = text => {
  let desc = '';
  const result = text.match(DESC_SCRIPT);
  if (result && result.length > 0) {
    desc = result[1];
  }
  return desc;
};

const parseIsDebug = text => DEBUG_SCRIPT.test(text);

const parseComponentType = text => {
  let componentType = '';
  const result = text.match(COMPONENT_TYPE_SCRIPT);
  if (result && result.length > 0) {
    componentType = result[1];
  }
  return componentType;
};

module.exports = {
  parseJSX,
  parseStyle,
  parseTitle,
  parseDesc,
  parseIsDebug,
  parseComponentType
};