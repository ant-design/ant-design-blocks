import React from "react";
import styles from "./index.less";
import { Pagination } from "antd";

function onShowSizeChange(current, pageSize) {
  console.log(current, pageSize);
}

export default () => (
  <div className={styles.container}>
    <div id="components-pagination-demo-changer">
      <div>
        <Pagination
          showSizeChanger
          onShowSizeChange={onShowSizeChange}
          defaultCurrent={3}
          total={500}
        />
        <br />
        <Pagination
          showSizeChanger
          onShowSizeChange={onShowSizeChange}
          defaultCurrent={3}
          total={500}
          disabled
        />
      </div>
    </div>
  </div>
);
