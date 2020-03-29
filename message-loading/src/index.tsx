import React from "react";
import styles from "./index.less";
import { message, Button } from "antd";

const success = () => {
  const hide = message.loading("Action in progress..", 0);
  // Dismiss manually and asynchronously
  setTimeout(hide, 2500);
};

export default () => (
  <div className={styles.container}>
    <div id="components-message-demo-loading">
      <Button onClick={success}>Display a loading indicator</Button>
    </div>
  </div>
);
