import React from "react";
import styles from "./index.less";
import { Divider } from "antd";

export default () => (
  <div className={styles.container}>
    <div id="components-divider-demo-vertical">
      <div>
        Text
        <Divider type="vertical" />
        <a href="#">Link</a>
        <Divider type="vertical" />
        <a href="#">Link</a>
      </div>
    </div>
  </div>
);
