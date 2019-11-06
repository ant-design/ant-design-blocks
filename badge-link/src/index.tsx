import React from "react";
import { Badge } from "antd";

export default () => (
  <div className="container">
    <div id="components-badge-demo-link">
      <a href="#">
        <Badge count={5}>
          <span className="head-example" />
        </Badge>
      </a>
    </div>
  </div>
);
