import React from "react";
import styles from "./index.less";
import { Select } from "antd";

const { Option } = Select;

function handleChange(value) {
  console.log(value); // { key: "lucy", label: "Lucy (101)" }
}

export default () => (
  <div className={styles.container}>
    <div id="components-select-demo-label-in-value">
      <Select
        labelInValue
        defaultValue={{ key: "lucy" }}
        style={{ width: 120 }}
        onChange={handleChange}
      >
        <Option value="jack">Jack (100)</Option>
        <Option value="lucy">Lucy (101)</Option>
      </Select>
    </div>
  </div>
);
