import React from "react";
import styles from "./index.less";
import { Badge } from "antd";
import { NotificationOutlined } from "@ant-design/icons";

export default () => (
  <div className={styles.container}>
    <div id="components-badge-demo-dot">
      <div>
        <Badge dot>
          <NotificationOutlined />
        </Badge>
        <Badge count={0} dot>
          <NotificationOutlined />
        </Badge>
        <Badge dot>
          <a href="#">Link something</a>
        </Badge>
      </div>
    </div>
  </div>
);
