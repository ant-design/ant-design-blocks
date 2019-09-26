const JSX_SCRIPT = /```jsx\n*(.*(?=```))/is;
const STYLE_SCRIPT = /<style>\n*(.*(?=<\/style>))/is;
const TITLE_SCRIPT = /title:\s*zh-CN: (.*)/i;
const DESC_SCRIPT = /## zh-CN\n\n(.*)(?=\n\n## en-US)/is;

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
  const result = text.match(STYLE_SCRIPT);
  if (result && result.length > 0) {
    cssText = result[1];
  }

  // TODO: prettier
  cssText = `.card {\n  :global {\n    ${cssText}\n  }\n}`;

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

const parseIsDebug = text => {
  let IsDebug = false;
  return IsDebug;
};

module.exports = {
  parseJSX,
  parseStyle,
  parseTitle,
  parseDesc,
  parseIsDebug
};
