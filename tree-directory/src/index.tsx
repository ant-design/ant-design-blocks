import React from "react";
import { Tree } from "antd";

const { TreeNode, DirectoryTree } = Tree;

class Demo extends React.Component {
  onSelect = (keys, event) => {
    console.log("Trigger Select", keys, event);
  };

  onExpand = () => {
    console.log("Trigger Expand");
  };

  render() {
    return (
      <DirectoryTree
        multiple
        defaultExpandAll
        onSelect={this.onSelect}
        onExpand={this.onExpand}
      >
        <TreeNode title="parent 0" key="0-0">
          <TreeNode title="leaf 0-0" key="0-0-0" isLeaf />
          <TreeNode title="leaf 0-1" key="0-0-1" isLeaf />
        </TreeNode>
        <TreeNode title="parent 1" key="0-1">
          <TreeNode title="leaf 1-0" key="0-1-0" isLeaf />
          <TreeNode title="leaf 1-1" key="0-1-1" isLeaf />
        </TreeNode>
      </DirectoryTree>
    );
  }
}

export default () => (
  <div className="container">
    <div id="components-tree-demo-directory">
      <Demo />
    </div>
  </div>
);
