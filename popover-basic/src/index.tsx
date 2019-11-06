import React from "react";
import { Popover, Button } from "antd";

const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);

export default () => (
  <div className="container">
    <div id="components-popover-demo-basic">
      <Popover content={content} title="Title">
        <Button type="primary">Hover me</Button>
      </Popover>
    </div>
  </div>
);
