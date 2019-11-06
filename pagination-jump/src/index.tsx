import React from "react";
import styles from "./index.less";
import { Pagination } from "antd";

function onChange(pageNumber) {
  console.log("Page: ", pageNumber);
}

export default () => (
  <div className={styles.container}>
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
