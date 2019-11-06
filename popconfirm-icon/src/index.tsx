import React from "react";
import styles from "./index.less";
import { Popconfirm, Icon } from "antd";

export default () => (
  <div className={styles.container}>
    <div id="components-popconfirm-demo-icon">
      <Popconfirm
        title="Are you sure？"
        icon={<Icon type="question-circle-o" style={{ color: "red" }} />}
      >
        <a href="#">Delete</a>
      </Popconfirm>
    </div>
  </div>
);
