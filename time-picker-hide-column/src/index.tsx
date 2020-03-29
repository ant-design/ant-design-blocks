import React from "react";
import styles from "./index.less";
import { TimePicker } from "antd";
import moment from "moment";

const format = "HH:mm";

export default () => (
  <div className={styles.container}>
    <div id="components-time-picker-demo-hide-column">
      <TimePicker defaultValue={moment("12:08", format)} format={format} />
    </div>
  </div>
);
