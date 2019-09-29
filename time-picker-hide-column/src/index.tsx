import React from 'react';
import { TimePicker } from 'antd';
import moment from 'moment';

const format = 'HH:mm';

export default () => <div id="components-time-picker-demo-hide-column"><TimePicker defaultValue={moment('12:08', format)} format={format} /></div>;
