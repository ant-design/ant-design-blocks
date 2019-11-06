import React from "react";
import { Result, Button } from "antd";

export default () => (
  <div className="container">
    <div id="components-result-demo-warning">
      <Result
        status="warning"
        title="There are some problems with your operation."
        extra={
          <Button type="primary" key="console">
            Go Console
          </Button>
        }
      />
    </div>
  </div>
);
