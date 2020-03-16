import React from "react";
import styles from "./index.less";
import { DatePicker } from "antd";

const { RangePicker } = DatePicker;

export default () => (
  <div className={styles.container}>
    <div id="components-date-picker-demo-bordered">
      <div>
        <DatePicker bordered={false} />
        <br />
        <DatePicker picker="week" bordered={false} />
        <br />
        <DatePicker picker="month" bordered={false} />
        <br />
        <DatePicker picker="year" bordered={false} />
        <br />
        <RangePicker bordered={false} />
        <br />
        <RangePicker picker="week" bordered={false} />
        <br />
        <RangePicker picker="month" bordered={false} />
        <br />
        <RangePicker picker="year" bordered={false} />
      </div>
    </div>
  </div>
);
