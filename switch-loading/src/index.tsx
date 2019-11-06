import React from "react";
import { Switch } from "antd";

export default () => (
  <div className="container">
    <div id="components-switch-demo-loading">
      <div>
        <Switch loading defaultChecked />
        <br />
        <Switch size="small" loading />
      </div>
    </div>
  </div>
);
