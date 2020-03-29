import React from "react";
import styles from "./index.less";
import { Switch } from "antd";

export default () => (
  <div className={styles.container}>
    <div id="components-switch-demo-size">
      <div>
        <Switch defaultChecked />
        <br />
        <Switch size="small" defaultChecked />
      </div>
    </div>
  </div>
);
