import React from 'react';
import { Popconfirm, Icon } from 'antd';

export default () => 
  <Popconfirm
    title="Are you sure？"
    icon={<Icon type="question-circle-o" style={{ color: 'red' }} />}
  >
    <a href="#">Delete</a>
  </Popconfirm>;
