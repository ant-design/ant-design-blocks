import React from "react";
import { Alert } from "antd";

export default () => (
  <div className="container">
    <div id="components-alert-demo-close-text">
      <Alert message="Info Text" type="info" closeText="Close Now" />
    </div>
  </div>
);
