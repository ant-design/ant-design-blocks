import React from "react";
import styles from "./index.less";
import { Button, notification } from "antd";

const openNotificationWithIcon = type => {
  notification[type]({
    message: "Notification Title",
    description:
      "This is the content of the notification. This is the content of the notification. This is the content of the notification."
  });
};

export default () => (
  <div className={styles.container}>
    <div id="components-notification-demo-with-icon">
      <div>
        <Button onClick={() => openNotificationWithIcon("success")}>
          Success
        </Button>
        <Button onClick={() => openNotificationWithIcon("info")}>Info</Button>
        <Button onClick={() => openNotificationWithIcon("warning")}>
          Warning
        </Button>
        <Button onClick={() => openNotificationWithIcon("error")}>Error</Button>
      </div>
    </div>
  </div>
);
