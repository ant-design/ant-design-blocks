import React from "react";
import { TimePicker } from "antd";

export default () => (
  <div className="container">
    <div id="components-time-picker-demo-interval-options">
      <TimePicker minuteStep={15} secondStep={10} />
    </div>
  </div>
);
