import React from 'react';
import { Input } from 'antd';

export default () => 
  <div className="example-input">
    <Input size="large" placeholder="large size" />
    <Input placeholder="default size" />
    <Input size="small" placeholder="small size" />
  </div>;
