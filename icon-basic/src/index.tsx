import React from "react";
import styles from "./index.less";
import {
  HomeOutlined,
  SettingFilled,
  SmileOutlined,
  SyncOutlined,
  LoadingOutlined
} from "@ant-design/icons";

export default () => (
  <div className={styles.container}>
    <div id="components-icon-demo-basic">
      <div className="icons-list">
        <HomeOutlined />
        <SettingFilled />
        <SmileOutlined />
        <SyncOutlined spin />
        <SmileOutlined rotate={180} />
        <LoadingOutlined />
      </div>
    </div>
  </div>
);
