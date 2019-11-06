import React from "react";
import styles from "./index.less";
import { Tree, Icon } from "antd";

const { TreeNode } = Tree;

export default () => (
  <div className={styles.container}>
    <div id="components-tree-demo-customized-icon">
      <Tree
        showIcon
        defaultExpandAll
        defaultSelectedKeys={["0-0-0"]}
        switcherIcon={<Icon type="down" />}
      >
        <TreeNode icon={<Icon type="smile-o" />} title="parent 1" key="0-0">
          <TreeNode icon={<Icon type="meh-o" />} title="leaf" key="0-0-0" />
          <TreeNode
            icon={({ selected }) => (
              <Icon type={selected ? "frown" : "frown-o"} />
            )}
            title="leaf"
            key="0-0-1"
          />
        </TreeNode>
      </Tree>
    </div>
  </div>
);
