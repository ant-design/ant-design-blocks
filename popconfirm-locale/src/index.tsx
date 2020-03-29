import React from "react";
import styles from "./index.less";
import { Popconfirm } from "antd";

export default () => (
  <div className={styles.container}>
    <div id="components-popconfirm-demo-locale">
      <Popconfirm title="Are you sure？" okText="Yes" cancelText="No">
        <a href="#">Delete</a>
      </Popconfirm>
    </div>
  </div>
);
