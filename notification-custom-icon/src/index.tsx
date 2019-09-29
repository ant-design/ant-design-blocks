import React from 'react';
import { Button, notification, Icon } from 'antd';

const openNotification = () => {
  notification.open({
    message: 'Notification Title',
    description:
      'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    icon: <Icon type="smile" style={{ color: '#108ee9' }} />,
  });
};

export default () => <div id="components-notification-demo-custom-icon">
  <Button type="primary" onClick={openNotification}>
    Open the notification box
  </Button></div>;
