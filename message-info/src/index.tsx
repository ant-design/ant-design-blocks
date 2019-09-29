import React from 'react';
import { message, Button } from 'antd';

const info = () => {
  message.info('This is a normal message');
};

export default () => <div id="components-message-demo-info">
  <Button type="primary" onClick={info}>
    Display normal message
  </Button></div>;
