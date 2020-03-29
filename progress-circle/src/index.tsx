import React from "react";
import styles from "./index.less";
import { Progress } from "antd";

export default () => (
  <div className={styles.container}>
    <div id="components-progress-demo-circle">
      <div>
        <Progress type="circle" percent={75} />
        <Progress type="circle" percent={70} status="exception" />
        <Progress type="circle" percent={100} />
      </div>
    </div>
  </div>
);
