import React from "react";
import styles from "./index.less";
import { Button, notification, Divider } from "antd";
import {
  RadiusUpleftOutlined,
  RadiusUprightOutlined,
  RadiusBottomleftOutlined,
  RadiusBottomrightOutlined
} from "@ant-design/icons";

const openNotification = placement => {
  notification.info({
    message: `Notification ${placement}`,
    description:
      "This is the content of the notification. This is the content of the notification. This is the content of the notification.",
    placement
  });
};

export default () => (
  <div className={styles.container}>
    <div id="components-notification-demo-placement">
      <div>
        <Button type="primary" onClick={() => openNotification("topLeft")}>
          <RadiusUpleftOutlined />
          topLeft
        </Button>
        <Button type="primary" onClick={() => openNotification("topRight")}>
          <RadiusUprightOutlined />
          topRight
        </Button>
        <Divider />
        <Button type="primary" onClick={() => openNotification("bottomLeft")}>
          <RadiusBottomleftOutlined />
          bottomLeft
        </Button>
        <Button type="primary" onClick={() => openNotification("bottomRight")}>
          <RadiusBottomrightOutlined />
          bottomRight
        </Button>
      </div>
    </div>
  </div>
);
