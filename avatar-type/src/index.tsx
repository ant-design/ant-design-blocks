import React from "react";
import styles from "./index.less";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

export default () => (
  <div className={styles.container}>
    <div id="components-avatar-demo-type">
      <div>
        <Avatar icon={<UserOutlined />} />
        <Avatar>U</Avatar>
        <Avatar>USER</Avatar>
        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        <Avatar style={{ color: "#f56a00", backgroundColor: "#fde3cf" }}>
          U
        </Avatar>
        <Avatar
          style={{ backgroundColor: "#87d068" }}
          icon={<UserOutlined />}
        />
      </div>
    </div>
  </div>
);
