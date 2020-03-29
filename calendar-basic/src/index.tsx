import React from "react";
import styles from "./index.less";
import { Calendar } from "antd";

function onPanelChange(value, mode) {
  console.log(value.format("YYYY-MM-DD"), mode);
}

export default () => (
  <div className={styles.container}>
    <div id="components-calendar-demo-basic">
      <Calendar onPanelChange={onPanelChange} />
    </div>
  </div>
);
