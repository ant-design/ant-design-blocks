import React from "react";
import styles from "./index.less";
import { Progress } from "antd";

export default () => (
  <div className={styles.container}>
    <div id="components-progress-demo-linecap">
      <div>
        <Progress strokeLinecap="square" percent={75} />
        <Progress strokeLinecap="square" type="circle" percent={75} />
        <Progress strokeLinecap="square" type="dashboard" percent={75} />
      </div>
    </div>
  </div>
);
