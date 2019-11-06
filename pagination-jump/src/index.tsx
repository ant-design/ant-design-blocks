import React from "react";
import { Pagination } from "antd";

function onChange(pageNumber) {
  console.log("Page: ", pageNumber);
}

export default () => (
  <div className="container">
    <div id="components-pagination-demo-jump">
      <div>
        <Pagination
          showQuickJumper
          defaultCurrent={2}
          total={500}
          onChange={onChange}
        />
        <br />
        <Pagination
          showQuickJumper
          defaultCurrent={2}
          total={500}
          onChange={onChange}
          disabled
        />
      </div>
    </div>
  </div>
);
