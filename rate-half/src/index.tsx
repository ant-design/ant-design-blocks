import React from "react";
import styles from "./index.less";
import { Rate } from "antd";

export default () => (
  <div className={styles.container}>
    <div id="components-rate-demo-half">
      <Rate allowHalf defaultValue={2.5} />
    </div>
  </div>
);
