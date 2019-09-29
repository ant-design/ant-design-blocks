import React from 'react';
import { InputNumber } from 'antd';

function onChange(value) {
  console.log('changed', value);
}

export default () => <div id="components-input-number-demo-basic"><InputNumber min={1} max={10} defaultValue={3} onChange={onChange} /></div>;
