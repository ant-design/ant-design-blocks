import React from "react";
import styles from "./index.less";
import { Button, message } from "antd";

const key = "updatable";

const openMessage = () => {
  message.loading({ content: "Loading...", key });
  setTimeout(() => {
    message.success({ content: "Loaded!", key, duration: 2 });
  });
};

export default () => (
  <div className={styles.container}>
    <div id="components-message-demo-update">
      <Button type="primary" onClick={openMessage}>
        Open the message box
      </Button>
    </div>
  </div>
);
