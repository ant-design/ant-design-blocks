import React from 'react';
import { Switch } from 'antd';

function onChange(checked) {
  console.log(`switch to ${checked}`);
}

export default () => <Switch defaultChecked onChange={onChange} />;
