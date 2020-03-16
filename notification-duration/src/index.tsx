import React from "react";
import styles from "./index.less";
import { Button, notification } from "antd";

const openNotification = () => {
  const args = {
    message: "Notification Title",
    description:
      "I will never close automatically. This is a purposely very very long description that has many many characters and words.",
    duration: 0
  };
  notification.open(args);
};

export default () => (
  <div className={styles.container}>
    <div id="components-notification-demo-duration">
      <Button type="primary" onClick={openNotification}>
        Open the notification box
      </Button>
    </div>
  </div>
);
