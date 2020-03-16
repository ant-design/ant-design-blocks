import React from "react";
import styles from "./index.less";
import { TimePicker } from "antd";

const { RangePicker } = TimePicker;

export default () => (
  <div className={styles.container}>
    <div id="components-time-picker-demo-range-picker">
      <div>
        <RangePicker />
      </div>
    </div>
  </div>
);
