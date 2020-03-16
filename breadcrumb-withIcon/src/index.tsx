import React from "react";
import styles from "./index.less";
import { Breadcrumb } from "antd";
import { HomeOutlined, UserOutlined } from "@ant-design/icons";

export default () => (
  <div className={styles.container}>
    <div id="components-breadcrumb-demo-withIcon">
      <Breadcrumb>
        <Breadcrumb.Item href="">
          <HomeOutlined />
        </Breadcrumb.Item>
        <Breadcrumb.Item href="">
          <UserOutlined />
          <span>Application List</span>
        </Breadcrumb.Item>
        <Breadcrumb.Item>Application</Breadcrumb.Item>
      </Breadcrumb>
    </div>
  </div>
);
