import React from "react";
import styles from "./index.less";
import { Spin, Icon } from "antd";

const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;

export default () => (
  <div className={styles.container}>
    <div id="components-spin-demo-custom-indicator">
      <Spin indicator={antIcon} />
    </div>
  </div>
);
