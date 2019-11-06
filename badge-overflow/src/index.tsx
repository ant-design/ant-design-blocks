import React from "react";
import { Badge } from "antd";

export default () => (
  <div className="container">
    <div id="components-badge-demo-overflow">
      <div>
        <Badge count={99}>
          <a href="#" className="head-example" />
        </Badge>
        <Badge count={100}>
          <a href="#" className="head-example" />
        </Badge>
        <Badge count={99} overflowCount={10}>
          <a href="#" className="head-example" />
        </Badge>
        <Badge count={1000} overflowCount={999}>
          <a href="#" className="head-example" />
        </Badge>
      </div>
    </div>
  </div>
);
