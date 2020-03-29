import React from "react";
import styles from "./index.less";
import { Tag } from "antd";

export default () => (
  <div className={styles.container}>
    <div id="components-tag-demo-status">
      <div>
        <Tag color="success">success</Tag>
        <Tag color="processing">processing</Tag>
        <Tag color="error">error</Tag>
        <Tag color="default">default</Tag>
        <Tag color="warning">warning</Tag>
      </div>
    </div>
  </div>
);
