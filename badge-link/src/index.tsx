import React from "react";
import styles from "./index.less";
import { Badge } from "antd";

export default () => (
  <div className={styles.container}>
    <div id="components-badge-demo-link">
      <a href="#">
        <Badge count={5}>
          <span className="head-example" />
        </Badge>
      </a>
    </div>
  </div>
);
