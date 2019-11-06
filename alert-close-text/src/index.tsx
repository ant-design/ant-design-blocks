import React from "react";
import styles from "./index.less";
import { Alert } from "antd";

export default () => (
  <div className={styles.container}>
    <div id="components-alert-demo-close-text">
      <Alert message="Info Text" type="info" closeText="Close Now" />
    </div>
  </div>
);
