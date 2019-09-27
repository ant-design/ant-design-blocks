import React from 'react';
import { Input } from 'antd';

const onChange = e => {
  console.log(e);
};

export default () => 
  <Input placeholder="input with clear icon" allowClear onChange={onChange} />;
