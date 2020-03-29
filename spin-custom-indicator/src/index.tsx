import React from "react";
import styles from "./index.less";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

export default () => (
  <div className={styles.container}>
    <div id="components-spin-demo-custom-indicator">
      <Spin indicator={antIcon} />
    </div>
  </div>
);
