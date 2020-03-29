import React from "react";
import styles from "./index.less";
import moment from "moment";
import { DatePicker } from "antd";

const { RangePicker } = DatePicker;

function range(start, end) {
  const result = [];
  for (let i = start; i < end; i++) {
    result.push(i);
  }
  return result;
}

function disabledDate(current) {
  // Can not select days before today and today
  return current && current < moment().endOf("day");
}

function disabledDateTime() {
  return {
    disabledHours: () => range(0, 24).splice(4, 20),
    disabledMinutes: () => range(30, 60),
    disabledSeconds: () => [55, 56]
  };
}

function disabledRangeTime(_, type) {
  if (type === "start") {
    return {
      disabledHours: () => range(0, 60).splice(4, 20),
      disabledMinutes: () => range(30, 60),
      disabledSeconds: () => [55, 56]
    };
  }
  return {
    disabledHours: () => range(0, 60).splice(20, 4),
    disabledMinutes: () => range(0, 31),
    disabledSeconds: () => [55, 56]
  };
}

export default () => (
  <div className={styles.container}>
    <div id="components-date-picker-demo-disabled-date">
      <div>
        <DatePicker
          format="YYYY-MM-DD HH:mm:ss"
          disabledDate={disabledDate}
          disabledTime={disabledDateTime}
          showTime={{ defaultValue: moment("00:00:00", "HH:mm:ss") }}
        />
        <br />
        <DatePicker picker="month" disabledDate={disabledDate} />
        <br />
        <RangePicker
          disabledDate={disabledDate}
          disabledTime={disabledRangeTime}
          showTime={{
            hideDisabledOptions: true,
            defaultValue: [
              moment("00:00:00", "HH:mm:ss"),
              moment("11:59:59", "HH:mm:ss")
            ]
          }}
          format="YYYY-MM-DD HH:mm:ss"
        />
      </div>
    </div>
  </div>
);
