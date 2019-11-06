import React from "react";
import { Pagination } from "antd";

function showTotal(total) {
  return `Total ${total} items`;
}

export default () => (
  <div className="container">
    <div id="components-pagination-demo-mini">
      <div>
        <Pagination size="small" total={50} />
        <Pagination size="small" total={50} showSizeChanger showQuickJumper />
        <Pagination size="small" total={50} showTotal={showTotal} />
      </div>
    </div>
  </div>
);
