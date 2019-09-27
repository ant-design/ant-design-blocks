import React from 'react';
import { Result, Button } from 'antd';

export default () => 
  <Result
    status="warning"
    title="There are some problems with your operation."
    extra={
      <Button type="primary" key="console">
        Go Console
      </Button>
    }
  />;
