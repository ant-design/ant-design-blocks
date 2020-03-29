import React from "react";
import styles from "./index.less";
import { Input } from "antd";

export default () => (
  <div className={styles.container}>
    <div id="components-input-demo-password-input">
      <Input.Password placeholder="input password" />
    </div>
  </div>
);
