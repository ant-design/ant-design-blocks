import React from "react";
import { Switch } from "antd";

export default () => (
  <div className="container">
    <div id="components-switch-demo-size">
      <div>
        <Switch defaultChecked />
        <br />
        <Switch size="small" defaultChecked />
      </div>
    </div>
  </div>
);
