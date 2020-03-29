import React from "react";
import styles from "./index.less";
import { TimePicker } from "antd";

export default () => (
  <div className={styles.container}>
    <div id="components-time-picker-demo-interval-options">
      <TimePicker minuteStep={15} secondStep={10} />
    </div>
  </div>
);
