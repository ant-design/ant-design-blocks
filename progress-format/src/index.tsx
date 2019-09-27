import React from 'react';
import { Progress } from 'antd';

export default () => 
  <div>
    <Progress type="circle" percent={75} format={percent => `${percent} Days`} />
    <Progress type="circle" percent={100} format={() => 'Done'} />
  </div>;
