import React from "react";
import styles from "./index.less";
import { Rate } from "antd";

export default () => (
  <div className={styles.container}>
    <div id="components-rate-demo-disabled">
      <Rate disabled defaultValue={2} />
    </div>
  </div>
);
