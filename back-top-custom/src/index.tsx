import React from 'react';
import { BackTop } from 'antd';

export default () => <div id="components-back-top-demo-custom">
  <div>
    <BackTop>
      <div className="ant-back-top-inner">UP</div>
    </BackTop>
    Scroll down to see the bottom-right
    <strong style={{ color: '#1088e9' }}> blue </strong>
    button.
  </div></div>;
