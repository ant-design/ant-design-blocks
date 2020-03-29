import React from "react";
import styles from "./index.less";
import { Switch } from "antd";

export default () => (
  <div className={styles.container}>
    <div id="components-switch-demo-loading">
      <div>
        <Switch loading defaultChecked />
        <br />
        <Switch size="small" loading />
      </div>
    </div>
  </div>
);
