import React from 'react';
import { Progress } from 'antd';

export default () => <div id="components-progress-demo-circle-mini">
  <div>
    <Progress type="circle" percent={30} width={80} />
    <Progress type="circle" percent={70} width={80} status="exception" />
    <Progress type="circle" percent={100} width={80} />
  </div></div>;
