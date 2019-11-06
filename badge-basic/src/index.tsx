import React from "react";
import styles from "./index.less";
import { Badge, Icon } from "antd";

export default () => (
  <div className={styles.container}>
    <div id="components-badge-demo-basic">
      <div>
        <Badge count={5}>
          <a href="#" className="head-example" />
        </Badge>
        <Badge count={0} showZero>
          <a href="#" className="head-example" />
        </Badge>
        <Badge
          count={<Icon type="clock-circle" style={{ color: "#f5222d" }} />}
        >
          <a href="#" className="head-example" />
        </Badge>
      </div>
    </div>
  </div>
);
