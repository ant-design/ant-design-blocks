import React from "react";
import styles from "./index.less";
import { Select, Tag } from "antd";

const options = [
  { value: "gold" },
  { value: "lime" },
  { value: "green" },
  { value: "cyan" }
];

function tagRender(props) {
  const { label, value, closable, onClose } = props;

  return (
    <Tag
      color={value}
      closable={closable}
      onClose={onClose}
      style={{ marginRight: 3 }}
    >
      {label}
    </Tag>
  );
}

export default () => (
  <div className={styles.container}>
    <div id="components-select-demo-custom-tag-render">
      <Select
        mode="multiple"
        tagRender={tagRender}
        defaultValue={["gold", "cyan"]}
        style={{ width: "100%" }}
        options={options}
      />
    </div>
  </div>
);
