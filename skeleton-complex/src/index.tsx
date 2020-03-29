import React from "react";
import styles from "./index.less";
import { Skeleton } from "antd";

export default () => (
  <div className={styles.container}>
    <div id="components-skeleton-demo-complex">
      <Skeleton avatar paragraph={{ rows: 4 }} />
    </div>
  </div>
);
