import React from 'react';
import { Slider } from 'antd';

function formatter(value) {
  return `${value}%`;
}

export default () => 
  <div>
    <Slider tipFormatter={formatter} />
    <Slider tipFormatter={null} />
  </div>;
