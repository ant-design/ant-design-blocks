import React from "react";
import { Badge, Icon } from "antd";

export default () => (
  <div className="container">
    <div id="components-badge-demo-dot">
      <div>
        <Badge dot>
          <Icon type="notification" />
        </Badge>
        <Badge count={0} dot>
          <Icon type="notification" />
        </Badge>
        <Badge dot>
          <a href="#">Link something</a>
        </Badge>
      </div>
    </div>
  </div>
);
