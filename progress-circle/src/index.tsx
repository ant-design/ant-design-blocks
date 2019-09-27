import React from 'react';
import { Progress } from 'antd';

export default () => 
  <div>
    <Progress type="circle" percent={75} />
    <Progress type="circle" percent={70} status="exception" />
    <Progress type="circle" percent={100} />
  </div>;
