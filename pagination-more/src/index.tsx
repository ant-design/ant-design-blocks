import React from "react";
import styles from "./index.less";
import { Pagination } from "antd";

export default () => (
  <div className={styles.container}>
    <div id="components-pagination-demo-more">
      <Pagination defaultCurrent={6} total={500} />
    </div>
  </div>
);
