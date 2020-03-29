import React from "react";
import styles from "./index.less";
import { InputNumber } from "antd";

function onChange(value) {
  console.log("changed", value);
}

export default () => (
  <div className={styles.container}>
    <div id="components-input-number-demo-digit">
      <InputNumber min={0} max={10} step={0.1} onChange={onChange} />
    </div>
  </div>
);
