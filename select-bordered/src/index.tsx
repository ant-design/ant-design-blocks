import React from "react";
import styles from "./index.less";
import { Select } from "antd";

const { Option } = Select;

export default () => (
  <div className={styles.container}>
    <div id="components-select-demo-bordered">
      <>
        <Select defaultValue="lucy" style={{ width: 120 }} bordered={false}>
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
          <Option value="Yiminghe">yiminghe</Option>
        </Select>
        <Select
          defaultValue="lucy"
          style={{ width: 120 }}
          disabled
          bordered={false}
        >
          <Option value="lucy">Lucy</Option>
        </Select>
      </>
    </div>
  </div>
);
