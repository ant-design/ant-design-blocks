import React from "react";
import styles from "./index.less";
import { Rate } from "antd";
import { HeartOutlined } from "@ant-design/icons";

export default () => (
  <div className={styles.container}>
    <div id="components-rate-demo-character">
      <div>
        <Rate character={<HeartOutlined />} allowHalf />
        <br />
        <Rate character="A" allowHalf style={{ fontSize: 36 }} />
        <br />
        <Rate character="好" allowHalf />
      </div>
    </div>
  </div>
);
