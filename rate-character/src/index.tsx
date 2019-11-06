import React from "react";
import styles from "./index.less";
import { Rate, Icon } from "antd";

export default () => (
  <div className={styles.container}>
    <div id="components-rate-demo-character">
      <div>
        <Rate character={<Icon type="heart" />} allowHalf />
        <br />
        <Rate character="A" allowHalf style={{ fontSize: 36 }} />
        <br />
        <Rate character="好" allowHalf />
      </div>
    </div>
  </div>
);
