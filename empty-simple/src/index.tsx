import React from "react";
import styles from "./index.less";
import { Empty } from "antd";

export default () => (
  <div className={styles.container}>
    <div id="components-empty-demo-simple">
      <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
    </div>
  </div>
);
