import React from "react";
import styles from "./index.less";
import { Progress } from "antd";

export default () => (
  <div className={styles.container}>
    <div id="components-progress-demo-line-mini">
      <div style={{ width: 170 }}>
        <Progress percent={30} size="small" />
        <Progress percent={50} size="small" status="active" />
        <Progress percent={70} size="small" status="exception" />
        <Progress percent={100} size="small" />
      </div>
    </div>
  </div>
);
