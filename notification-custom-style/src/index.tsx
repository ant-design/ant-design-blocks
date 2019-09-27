import React from 'react';
import { Button, notification } from 'antd';

const openNotification = () => {
  notification.open({
    message: 'Notification Title',
    description:
      'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    style: {
      width: 600,
      marginLeft: 335 - 600,
    },
  });
};

export default () => 
  <Button type="primary" onClick={openNotification}>
    Open the notification box
  </Button>;
