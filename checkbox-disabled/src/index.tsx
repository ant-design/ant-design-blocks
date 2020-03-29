import React from "react";
import styles from "./index.less";
import { Checkbox } from "antd";

export default () => (
  <div className={styles.container}>
    <div id="components-checkbox-demo-disabled">
      <div>
        <Checkbox defaultChecked={false} disabled />
        <br />
        <Checkbox defaultChecked disabled />
      </div>
    </div>
  </div>
);
