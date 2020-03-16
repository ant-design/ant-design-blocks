import React from "react";
import styles from "./index.less";
import { Switch } from "antd";
import { CloseOutlined, CheckOutlined } from "@ant-design/icons";

export default () => (
  <div className={styles.container}>
    <div id="components-switch-demo-text">
      <div>
        <Switch checkedChildren="开" unCheckedChildren="关" defaultChecked />
        <br />
        <Switch checkedChildren="1" unCheckedChildren="0" />
        <br />
        <Switch
          checkedChildren={<CheckOutlined />}
          unCheckedChildren={<CloseOutlined />}
          defaultChecked
        />
      </div>
    </div>
  </div>
);
