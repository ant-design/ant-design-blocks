import React from "react";
import styles from "./index.less";
import { DatePicker } from "antd";

const { RangePicker } = DatePicker;

export default () => (
  <div className={styles.container}>
    <div id="components-date-picker-demo-extra-footer">
      <div>
        <DatePicker renderExtraFooter={() => "extra footer"} />
        <br />
        <DatePicker renderExtraFooter={() => "extra footer"} showTime />
        <br />
        <RangePicker renderExtraFooter={() => "extra footer"} />
        <br />
        <RangePicker renderExtraFooter={() => "extra footer"} showTime />
        <br />
        <DatePicker renderExtraFooter={() => "extra footer"} picker="month" />
      </div>
    </div>
  </div>
);
