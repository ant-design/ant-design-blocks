import React from "react";
import { Progress } from "antd";

export default () => (
  <div className="container">
    <div id="components-progress-demo-dashboard">
      <Progress type="dashboard" percent={75} />
    </div>
  </div>
);
