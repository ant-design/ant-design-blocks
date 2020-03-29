import React from "react";
import styles from "./index.less";
import { TimePicker } from "antd";
import moment from "moment";

function onChange(time, timeString) {
  console.log(time, timeString);
}

export default () => (
  <div className={styles.container}>
    <div id="components-time-picker-demo-basic">
      <TimePicker
        onChange={onChange}
        defaultOpenValue={moment("00:00:00", "HH:mm:ss")}
      />
    </div>
  </div>
);
