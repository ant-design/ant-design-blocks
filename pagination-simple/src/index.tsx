import React from "react";
import { Pagination } from "antd";

export default () => (
  <div className="container">
    <div id="components-pagination-demo-simple">
      <Pagination simple defaultCurrent={2} total={50} />
    </div>
  </div>
);
