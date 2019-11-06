import React from "react";
import { Spin } from "antd";

export default () => (
  <div className="container">
    <div id="components-spin-demo-size">
      <div>
        <Spin size="small" />
        <Spin />
        <Spin size="large" />
      </div>
    </div>
  </div>
);
