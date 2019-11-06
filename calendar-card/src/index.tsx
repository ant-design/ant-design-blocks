import React from "react";
import { Calendar } from "antd";

function onPanelChange(value, mode) {
  console.log(value, mode);
}

export default () => (
  <div className="container">
    <div id="components-calendar-demo-card">
      <div style={{ width: 300, border: "1px solid #d9d9d9", borderRadius: 4 }}>
        <Calendar fullscreen={false} onPanelChange={onPanelChange} />
      </div>
    </div>
  </div>
);
