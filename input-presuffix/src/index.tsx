import React from "react";
import styles from "./index.less";
import { Input, Tooltip } from "antd";
import { InfoCircleOutlined, UserOutlined } from "@ant-design/icons";

export default () => (
  <div className={styles.container}>
    <div id="components-input-demo-presuffix">
      <div>
        <Input
          placeholder="Enter your username"
          prefix={<UserOutlined className="site-form-item-icon" />}
          suffix={
            <Tooltip title="Extra information">
              <InfoCircleOutlined style={{ color: "rgba(0,0,0,.45)" }} />
            </Tooltip>
          }
        />
        <br />
        <br />
        <Input prefix="￥" suffix="RMB" />

        <br />
        <br />

        <Input prefix="￥" suffix="RMB" disabled />
      </div>
    </div>
  </div>
);
