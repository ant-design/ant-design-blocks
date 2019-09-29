import React from 'react';
import { Calendar } from 'antd';

function onPanelChange(value, mode) {
  console.log(value, mode);
}

export default () => <div id="components-calendar-demo-basic"><Calendar onPanelChange={onPanelChange} /></div>;
