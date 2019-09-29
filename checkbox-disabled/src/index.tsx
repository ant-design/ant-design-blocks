import React from 'react';
import { Checkbox } from 'antd';

export default () => <div id="components-checkbox-demo-disabled">
  <div>
    <Checkbox defaultChecked={false} disabled />
    <br />
    <Checkbox defaultChecked disabled />
  </div></div>;
