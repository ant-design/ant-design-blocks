import React from "react";
import { Popconfirm } from "antd";

export default () => (
  <div className="container">
    <div id="components-popconfirm-demo-locale">
      <Popconfirm title="Are you sure？" okText="Yes" cancelText="No">
        <a href="#">Delete</a>
      </Popconfirm>
    </div>
  </div>
);
