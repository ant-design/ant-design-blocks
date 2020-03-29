import React from "react";
import styles from "./index.less";
import { Select } from "antd";

const { Option, OptGroup } = Select;

function handleChange(value) {
  console.log(`selected ${value}`);
}

export default () => (
  <div className={styles.container}>
    <div id="components-select-demo-optgroup">
      <Select
        defaultValue="lucy"
        style={{ width: 200 }}
        onChange={handleChange}
      >
        <OptGroup label="Manager">
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
        </OptGroup>
        <OptGroup label="Engineer">
          <Option value="Yiminghe">yiminghe</Option>
        </OptGroup>
      </Select>
    </div>
  </div>
);
