import React from "react";
import { Alert } from "antd";

export default () => (
  <div className="container">
    <div id="components-alert-demo-style">
      <div>
        <Alert message="Success Text" type="success" />
        <Alert message="Info Text" type="info" />
        <Alert message="Warning Text" type="warning" />
        <Alert message="Error Text" type="error" />
      </div>
    </div>
  </div>
);
