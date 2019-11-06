import React from "react";
import styles from "./index.less";
import { Input } from "antd";

const { TextArea } = Input;

export default () => (
  <div className={styles.container}>
    <div id="components-input-demo-textarea">
      <TextArea rows={4} />
    </div>
  </div>
);
