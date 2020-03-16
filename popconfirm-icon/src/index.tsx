import React from "react";
import styles from "./index.less";
import { Popconfirm } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";

export default () => (
  <div className={styles.container}>
    <div id="components-popconfirm-demo-icon">
      <Popconfirm
        title="Are you sure？"
        icon={<QuestionCircleOutlined style={{ color: "red" }} />}
      >
        <a href="#">Delete</a>
      </Popconfirm>
    </div>
  </div>
);
