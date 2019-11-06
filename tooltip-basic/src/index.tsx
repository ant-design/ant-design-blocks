import React from "react";
import styles from "./index.less";
import { Tooltip } from "antd";

export default () => (
  <div className={styles.container}>
    <div id="components-tooltip-demo-basic">
      <Tooltip title="prompt text">
        <span>Tooltip will show on mouse enter.</span>
      </Tooltip>
    </div>
  </div>
);
