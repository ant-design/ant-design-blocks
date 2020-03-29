import React from "react";
import styles from "./index.less";
import { Pagination } from "antd";

export default () => (
  <div className={styles.container}>
    <div id="components-pagination-demo-basic">
      <Pagination defaultCurrent={1} total={50} />
    </div>
  </div>
);
