import React from "react";
import styles from "./index.less";
import {
  SmileTwoTone,
  HeartTwoTone,
  CheckCircleTwoTone
} from "@ant-design/icons";

export default () => (
  <div className={styles.container}>
    <div id="components-icon-demo-two-tone">
      <div className="icons-list">
        <SmileTwoTone />
        <HeartTwoTone twoToneColor="#eb2f96" />
        <CheckCircleTwoTone twoToneColor="#52c41a" />
      </div>
    </div>
  </div>
);
