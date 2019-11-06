import React from "react";
import styles from "./index.less";
import { Empty } from "antd";

export default () => (
  <div className={styles.container}>
    <div id="components-empty-demo-description">
      <Empty description={false} />
    </div>
  </div>
);
