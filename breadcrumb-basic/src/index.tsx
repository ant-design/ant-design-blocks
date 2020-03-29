import React from "react";
import styles from "./index.less";
import { Breadcrumb } from "antd";

export default () => (
  <div className={styles.container}>
    <div id="components-breadcrumb-demo-basic">
      <Breadcrumb>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="">Application Center</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="">Application List</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>An Application</Breadcrumb.Item>
      </Breadcrumb>
    </div>
  </div>
);
