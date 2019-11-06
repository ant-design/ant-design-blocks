import React from "react";
import styles from "./index.less";
import { Breadcrumb, Icon } from "antd";

export default () => (
  <div className={styles.container}>
    <div id="components-breadcrumb-demo-withIcon">
      <Breadcrumb>
        <Breadcrumb.Item href="">
          <Icon type="home" />
        </Breadcrumb.Item>
        <Breadcrumb.Item href="">
          <Icon type="user" />
          <span>Application List</span>
        </Breadcrumb.Item>
        <Breadcrumb.Item>Application</Breadcrumb.Item>
      </Breadcrumb>
    </div>
  </div>
);
