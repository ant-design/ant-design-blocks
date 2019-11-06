import React from "react";
import styles from "./index.less";
import { Pagination } from "antd";

export default () => (
  <div className={styles.container}>
    <div id="components-pagination-demo-simple">
      <Pagination simple defaultCurrent={2} total={50} />
    </div>
  </div>
);
