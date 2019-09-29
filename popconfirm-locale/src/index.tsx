import React from 'react';
import { Popconfirm } from 'antd';

export default () => <div id="components-popconfirm-demo-locale">
  <Popconfirm title="Are you sure？" okText="Yes" cancelText="No">
    <a href="#">Delete</a>
  </Popconfirm></div>;
