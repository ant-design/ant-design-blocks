import React from "react";
import styles from "./index.less";
import { Select } from "antd";

const { Option } = Select;

function handleChange(value) {
  console.log(`selected ${value}`);
}

export default () => (
  <div className={styles.container}>
    <div id="components-select-demo-basic">
      <>
        <Select
          defaultValue="lucy"
          style={{ width: 120 }}
          onChange={handleChange}
        >
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
          <Option value="disabled" disabled>
            Disabled
          </Option>
          <Option value="Yiminghe">yiminghe</Option>
        </Select>
        <Select defaultValue="lucy" style={{ width: 120 }} disabled>
          <Option value="lucy">Lucy</Option>
        </Select>
        <Select defaultValue="lucy" style={{ width: 120 }} loading>
          <Option value="lucy">Lucy</Option>
        </Select>
        <Select defaultValue="lucy" style={{ width: 120 }} allowClear>
          <Option value="lucy">Lucy</Option>
        </Select>
      </>
    </div>
  </div>
);
