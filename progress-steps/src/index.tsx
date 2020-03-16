import React from "react";
import styles from "./index.less";
import { Progress } from "antd";

export default () => (
  <div className={styles.container}>
    <div id="components-progress-demo-steps">
      <div>
        <Progress percent={50} steps={3} strokeColor="#1890ff" />
        <br />
        <Progress percent={30} steps={5} strokeColor="#1890ff" />
        <br />
        <Progress percent={100} steps={5} size="small" strokeColor="#1890ff" />
      </div>
    </div>
  </div>
);
