import React from "react";
import styles from "./index.less";
import { Button, notification } from "antd";

const openNotification = () => {
  notification.open({
    message: "Notification Title",
    description:
      "This is the content of the notification. This is the content of the notification. This is the content of the notification.",
    style: {
      width: 600,
      marginLeft: 335 - 600
    }
  });
};

export default () => (
  <div className={styles.container}>
    <div id="components-notification-demo-custom-style">
      <Button type="primary" onClick={openNotification}>
        Open the notification box
      </Button>
    </div>
  </div>
);
