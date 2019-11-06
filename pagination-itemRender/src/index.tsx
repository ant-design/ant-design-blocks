import React from "react";
import styles from "./index.less";
import { Pagination } from "antd";

function itemRender(current, type, originalElement) {
  if (type === "prev") {
    return <a>Previous</a>;
  }
  if (type === "next") {
    return <a>Next</a>;
  }
  return originalElement;
}

export default () => (
  <div className={styles.container}>
    <div id="components-pagination-demo-itemRender">
      <Pagination total={500} itemRender={itemRender} />
    </div>
  </div>
);
