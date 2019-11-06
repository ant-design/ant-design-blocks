import React from "react";
import styles from "./index.less";
import { DatePicker } from "antd";

const { RangePicker } = DatePicker;

function onChange(value, dateString) {
  console.log("Selected Time: ", value);
  console.log("Formatted Selected Time: ", dateString);
}

function onOk(value) {
  console.log("onOk: ", value);
}

export default () => (
  <div className={styles.container}>
    <div id="components-date-picker-demo-time">
      <div>
        <DatePicker
          showTime
          placeholder="Select Time"
          onChange={onChange}
          onOk={onOk}
        />
        <br />
        <RangePicker
          showTime={{ format: "HH:mm" }}
          format="YYYY-MM-DD HH:mm"
          placeholder={["Start Time", "End Time"]}
          onChange={onChange}
          onOk={onOk}
        />
      </div>
    </div>
  </div>
);
