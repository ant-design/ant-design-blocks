import React from "react";
import styles from "./index.less";
import { Avatar, Badge } from "antd";
import { UserOutlined } from "@ant-design/icons";

export default () => (
  <div className={styles.container}>
    <div id="components-avatar-demo-badge">
      <div>
        <span className="avatar-item">
          <Badge count={1}>
            <Avatar shape="square" icon={<UserOutlined />} />
          </Badge>
        </span>
        <span>
          <Badge dot>
            <Avatar shape="square" icon={<UserOutlined />} />
          </Badge>
        </span>
      </div>
    </div>
  </div>
);
