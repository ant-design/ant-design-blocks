import React from "react";
import { Result, Button } from "antd";

export default () => (
  <div className="container">
    <div id="components-result-demo-404">
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={<Button type="primary">Back Home</Button>}
      />
    </div>
  </div>
);
