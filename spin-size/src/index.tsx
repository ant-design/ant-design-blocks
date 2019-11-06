import React from "react";
import styles from "./index.less";
import { Spin } from "antd";

export default () => (
  <div className={styles.container}>
    <div id="components-spin-demo-size">
      <div>
        <Spin size="small" />
        <Spin />
        <Spin size="large" />
      </div>
    </div>
  </div>
);
