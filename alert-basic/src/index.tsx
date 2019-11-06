import React from "react";
import styles from "./index.less";
import { Alert } from "antd";

export default () => (
  <div className={styles.container}>
    <div id="components-alert-demo-basic">
      <Alert message="Success Text" type="success" />
    </div>
  </div>
);
