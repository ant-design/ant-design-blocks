import styles from "./index.less";
import React, { useState } from "react";
import { Tree, Switch } from "antd";
import { CarryOutOutlined, FormOutlined } from "@ant-design/icons";

const treeData = [
  {
    title: "parent 1",
    key: "0-0",
    icon: <CarryOutOutlined />,
    children: [
      {
        title: "parent 1-0",
        key: "0-0-0",
        icon: <CarryOutOutlined />,
        children: [
          { title: "leaf", key: "0-0-0-0", icon: <CarryOutOutlined /> },
          { title: "leaf", key: "0-0-0-1", icon: <CarryOutOutlined /> },
          { title: "leaf", key: "0-0-0-2", icon: <CarryOutOutlined /> },
        ],
      },
      {
        title: "parent 1-1",
        key: "0-0-1",
        icon: <CarryOutOutlined />,
        children: [
          { title: "leaf", key: "0-0-1-0", icon: <CarryOutOutlined /> },
        ],
      },
      {
        title: "parent 1-2",
        key: "0-0-2",
        icon: <CarryOutOutlined />,
        children: [
          { title: "leaf", key: "0-0-2-0", icon: <CarryOutOutlined /> },
          {
            title: "leaf",
            key: "0-0-2-1",
            icon: <CarryOutOutlined />,
            switcherIcon: <FormOutlined />,
          },
        ],
      },
    ],
  },
];

const Demo: React.FC<{}> = () => {
  const [showLine, setShowLine] = useState(true);
  const [showIcon, setShowIcon] = useState(false);

  const onSelect = (selectedKeys, info) => {
    console.log("selected", selectedKeys, info);
  };

  return (
    <div>
      <div style={{ marginBottom: 16 }}>
        showLine: <Switch checked={showLine} onChange={setShowLine} />
        <br />
        <br />
        showIcon: <Switch checked={showIcon} onChange={setShowIcon} />
      </div>
      <Tree
        showLine={showLine}
        showIcon={showIcon}
        defaultExpandedKeys={["0-0-0"]}
        onSelect={onSelect}
        treeData={treeData}
      />
    </div>
  );
};

export default () => (
  <div className={styles.container}>
    <div id="components-tree-demo-line">
      <Demo />
    </div>
  </div>
);
