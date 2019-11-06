import React from "react";
import styles from "./index.less";
import { Alert } from "antd";

export default () => (
  <div className={styles.container}>
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
