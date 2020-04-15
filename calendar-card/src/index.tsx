import React from "react";
import styles from "./index.less";
import { Calendar } from "antd";
import { CalendarMode } from "antd/es/calendar/generateCalendar";

function onPanelChange(value: any, mode: CalendarMode) {
  console.log(value, mode);
}

export default () => (
  <div className={styles.container}>
    <div id="components-calendar-demo-card">
      <div className="site-calendar-demo-card">
        <Calendar fullscreen={false} onPanelChange={onPanelChange} />
      </div>
    </div>
  </div>
);
