import React from "react";
import styles from "./index.less";
import { Badge, Icon } from "antd";

export default () => (
  <div className={styles.container}>
    <div id="components-badge-demo-dot">
      <div>
        <Badge dot>
          <Icon type="notification" />
        </Badge>
        <Badge count={0} dot>
          <Icon type="notification" />
        </Badge>
        <Badge dot>
          <a href="#">Link something</a>
        </Badge>
      </div>
    </div>
  </div>
);
