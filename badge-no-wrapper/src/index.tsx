import React from "react";
import styles from "./index.less";
import { Badge } from "antd";

export default () => (
  <div className={styles.container}>
    <div id="components-badge-demo-no-wrapper">
      <div>
        <Badge count={25} />
        <Badge count={4} className="site-badge-count-4" />
        <Badge
          className="site-badge-count-109"
          count={109}
          style={{ backgroundColor: "#52c41a" }}
        />
      </div>
    </div>
  </div>
);
