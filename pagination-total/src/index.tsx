import React from "react";
import styles from "./index.less";
import { Pagination } from "antd";

export default () => (
  <div className={styles.container}>
    <div id="components-pagination-demo-total">
      <div>
        <Pagination
          total={85}
          showTotal={total => `Total ${total} items`}
          pageSize={20}
          defaultCurrent={1}
        />
        <br />
        <Pagination
          total={85}
          showTotal={(total, range) =>
            `${range[0]}-${range[1]} of ${total} items`
          }
          pageSize={20}
          defaultCurrent={1}
        />
      </div>
    </div>
  </div>
);
