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
    <div id="components-popover-demo-triggerType">
      <div>
        <Popover content={content} title="Title" trigger="hover">
          <Button>Hover me</Button>
        </Popover>
        <Popover content={content} title="Title" trigger="focus">
          <Button>Focus me</Button>
        </Popover>
        <Popover content={content} title="Title" trigger="click">
          <Button>Click me</Button>
        </Popover>
      </div>
    </div>
  </div>
);
