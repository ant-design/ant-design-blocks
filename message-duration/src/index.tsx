import React from "react";
import styles from "./index.less";
import { message, Button } from "antd";

const success = () => {
  message.success(
    "This is a prompt message for success, and it will disappear in 10 seconds",
    10
  );
};

export default () => (
  <div className={styles.container}>
    <div id="components-message-demo-duration">
      <Button onClick={success}>Customized display duration</Button>
    </div>
  </div>
);
