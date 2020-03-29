import React from "react";
import styles from "./index.less";
import { DatePicker } from "antd";

function onChange(date, dateString) {
  console.log(date, dateString);
}

export default () => (
  <div className={styles.container}>
    <div id="components-date-picker-demo-basic">
      <div>
        <DatePicker onChange={onChange} />
        <br />
        <DatePicker onChange={onChange} picker="week" />
        <br />
        <DatePicker onChange={onChange} picker="month" />
        <br />
        <DatePicker onChange={onChange} picker="year" />
      </div>
    </div>
  </div>
);
