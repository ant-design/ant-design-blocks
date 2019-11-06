import React from "react";
import styles from "./index.less";
import { Switch, Icon } from "antd";

export default () => (
  <div className={styles.container}>
    <div id="components-switch-demo-text">
      <div>
        <Switch checkedChildren="开" unCheckedChildren="关" defaultChecked />
        <br />
        <Switch checkedChildren="1" unCheckedChildren="0" />
        <br />
        <Switch
          checkedChildren={<Icon type="check" />}
          unCheckedChildren={<Icon type="close" />}
          defaultChecked
        />
      </div>
    </div>
  </div>
);
