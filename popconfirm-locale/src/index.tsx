import React from 'react';
import { Popconfirm } from 'antd';

export default () => 
  <Popconfirm title="Are you sure？" okText="Yes" cancelText="No">
    <a href="#">Delete</a>
  </Popconfirm>;
