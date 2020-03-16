import React from "react";
import styles from "./index.less";
import { DatePicker } from "antd";

const { RangePicker } = DatePicker;

export default () => (
  <div className={styles.container}>
    <div id="components-date-picker-demo-range-picker">
      <div>
        <RangePicker />
        <br />
        <RangePicker showTime />
        <br />
        <RangePicker picker="week" />
        <br />
        <RangePicker picker="month" />
        <br />
        <RangePicker picker="year" />
      </div>
    </div>
  </div>
);
