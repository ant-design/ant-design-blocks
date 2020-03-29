import React from "react";
import styles from "./index.less";
import { Progress } from "antd";

export default () => (
  <div className={styles.container}>
    <div id="components-progress-demo-dashboard">
      <Progress type="dashboard" percent={75} />
    </div>
  </div>
);
