import React from "react";
import styles from "./index.less";
import { Select } from "antd";

const { Option } = Select;

const children = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

function handleChange(value) {
  console.log(`selected ${value}`);
}

export default () => (
  <div className={styles.container}>
    <div id="components-select-demo-automatic-tokenization">
      <Select
        mode="tags"
        style={{ width: "100%" }}
        onChange={handleChange}
        tokenSeparators={[","]}
      >
        {children}
      </Select>
    </div>
  </div>
);
