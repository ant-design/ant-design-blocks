import React from 'react';
import { Avatar } from 'antd';

export default () => <div id="components-avatar-demo-basic">
  <div>
    <div>
      <Avatar size={64} icon="user" />
      <Avatar size="large" icon="user" />
      <Avatar icon="user" />
      <Avatar size="small" icon="user" />
    </div>
    <div>
      <Avatar shape="square" size={64} icon="user" />
      <Avatar shape="square" size="large" icon="user" />
      <Avatar shape="square" icon="user" />
      <Avatar shape="square" size="small" icon="user" />
    </div>
  </div></div>;
