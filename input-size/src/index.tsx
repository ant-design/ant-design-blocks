import React from "react";
import styles from "./index.less";
import { Input } from "antd";
import { UserOutlined } from "@ant-design/icons";

export default () => (
  <div className={styles.container}>
    <div id="components-input-demo-size">
      <div className="example-input">
        <Input
          size="large"
          placeholder="large size"
          prefix={<UserOutlined />}
        />
        <Input placeholder="default size" prefix={<UserOutlined />} />
        <Input
          size="small"
          placeholder="small size"
          prefix={<UserOutlined />}
        />
        <Input.Password size="large" placeholder="large Password" />
      </div>
    </div>
  </div>
);
