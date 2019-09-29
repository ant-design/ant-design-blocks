import React from 'react';
import { Input } from 'antd';

const onChange = e => {
  console.log(e);
};

export default () => <div id="components-input-demo-allowClear">
  <Input placeholder="input with clear icon" allowClear onChange={onChange} /></div>;
