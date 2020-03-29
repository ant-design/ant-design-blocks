import React from "react";
import styles from "./index.less";
import { Rate } from "antd";

export default () => (
  <div className={styles.container}>
    <div id="components-rate-demo-clear">
      <div>
        <Rate defaultValue={3} />
        <span className="ant-rate-text">allowClear: true</span>
        <br />
        <Rate allowClear={false} defaultValue={3} />
        <span className="ant-rate-text">allowClear: false</span>
      </div>
    </div>
  </div>
);
