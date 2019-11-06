import React from "react";
import styles from "./index.less";
import { Breadcrumb } from "antd";

export default () => (
  <div className={styles.container}>
    <div id="components-breadcrumb-demo-separator">
      <Breadcrumb separator=">">
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item href="">Application Center</Breadcrumb.Item>
        <Breadcrumb.Item href="">Application List</Breadcrumb.Item>
        <Breadcrumb.Item>An Application</Breadcrumb.Item>
      </Breadcrumb>
    </div>
  </div>
);
