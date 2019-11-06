import React from "react";
import { Pagination } from "antd";

export default () => (
  <div className="container">
    <div id="components-pagination-demo-basic">
      <Pagination defaultCurrent={1} total={50} />
    </div>
  </div>
);
