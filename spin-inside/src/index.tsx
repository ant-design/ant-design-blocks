import React from "react";
import styles from "./index.less";
import { Spin } from "antd";

export default () => (
  <div className={styles.container}>
    <div id="components-spin-demo-inside">
      <div className="example">
        <Spin />
      </div>
    </div>
  </div>
);
