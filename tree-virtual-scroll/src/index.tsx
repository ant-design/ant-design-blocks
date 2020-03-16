import React from "react";
import styles from "./index.less";
import { Tree } from "antd";

function dig(path = "0", level = 3) {
  const list = [];
  for (let i = 0; i < 10; i += 1) {
    const key = `${path}-${i}`;
    const treeNode = {
      title: key,
      key
    };

    if (level > 0) {
      treeNode.children = dig(key, level - 1);
    }

    list.push(treeNode);
  }
  return list;
}

const treeData = dig();

export default () => (
  <div className={styles.container}>
    <div id="components-tree-demo-virtual-scroll">
      <Tree treeData={treeData} height={233} defaultExpandAll />
    </div>
  </div>
);
