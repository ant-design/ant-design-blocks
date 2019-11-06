import React from "react";
import styles from "./index.less";
import { DatePicker } from "antd";

const { RangePicker, MonthPicker } = DatePicker;

export default () => (
  <div className={styles.container}>
    <div id="components-date-picker-demo-extra-footer">
      <div>
        <DatePicker renderExtraFooter={() => "extra footer"} />
        <DatePicker renderExtraFooter={() => "extra footer"} showTime />
        <RangePicker renderExtraFooter={() => "extra footer"} />
        <RangePicker renderExtraFooter={() => "extra footer"} showTime />
        <MonthPicker
          renderExtraFooter={() => "extra footer"}
          placeholder="Select month"
        />
      </div>
    </div>
  </div>
);
