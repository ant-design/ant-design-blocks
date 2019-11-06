import React from "react";
import { Button, notification } from "antd";

const key = "updatable";

const openNotification = () => {
  notification.open({
    key,
    message: "Notification Title",
    description: "description."
  });
  setTimeout(() => {
    notification.open({
      key,
      message: "New Title",
      description: "New description."
    });
  }, 1000);
};

export default () => (
  <div className="container">
    <div id="components-notification-demo-update">
      <Button type="primary" onClick={openNotification}>
        Open the notification box
      </Button>
    </div>
  </div>
);
