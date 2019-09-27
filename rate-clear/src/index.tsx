import React from 'react';
import { Rate } from 'antd';

export default () => 
  <div>
    <Rate defaultValue={3} />
    <span className="ant-rate-text">allowClear: true</span>
    <br />
    <Rate allowClear={false} defaultValue={3} />
    <span className="ant-rate-text">allowClear: false</span>
  </div>;
