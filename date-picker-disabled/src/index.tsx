import React from "react";
import styles from "./index.less";
import { DatePicker } from "antd";
import moment from "moment";

const { MonthPicker, RangePicker } = DatePicker;

const dateFormat = "YYYY-MM-DD";
export default () => (
  <div className={styles.container}>
    <div id="components-date-picker-demo-disabled">
      <div>
        <DatePicker defaultValue={moment("2015-06-06", dateFormat)} disabled />
        <br />
        <MonthPicker defaultValue={moment("2015-06", "YYYY-MM")} disabled />
        <br />
        <RangePicker
          defaultValue={[
            moment("2015-06-06", dateFormat),
            moment("2015-06-06", dateFormat)
          ]}
          disabled
        />
      </div>
    </div>
  </div>
);
