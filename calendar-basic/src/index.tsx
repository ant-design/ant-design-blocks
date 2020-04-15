import React from "react";
import { Calendar } from "antd";
import { CalendarMode } from "antd/es/calendar/generateCalendar";
import styles from "./index.less";

function onPanelChange(value: any, mode: CalendarMode) {
  console.log(value.format("YYYY-MM-DD"), mode);
}

export default () => (
  <div className={styles.container}>
    <div id="components-calendar-demo-basic">
      <Calendar onPanelChange={onPanelChange} />
    </div>
  </div>
);
