import React from 'react';
import { Switch } from 'antd';

function onChange(checked) {
  console.log(`switch to ${checked}`);
}

export default () => <div id="components-switch-demo-basic"><Switch defaultChecked onChange={onChange} /></div>;
