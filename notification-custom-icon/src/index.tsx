import React from "react";
import styles from "./index.less";
import { Button, notification } from "antd";
import { SmileOutlined } from "@ant-design/icons";

const openNotification = () => {
  notification.open({
    message: "Notification Title",
    description:
      "This is the content of the notification. This is the content of the notification. This is the content of the notification.",
    icon: <SmileOutlined style={{ color: "#108ee9" }} />
  });
};

export default () => (
  <div className={styles.container}>
    <div id="components-notification-demo-custom-icon">
      <Button type="primary" onClick={openNotification}>
        Open the notification box
      </Button>
    </div>
  </div>
);
