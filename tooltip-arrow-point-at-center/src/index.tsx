import React from "react";
import styles from "./index.less";
import { Tooltip, Button } from "antd";

export default () => (
  <div className={styles.container}>
    <div id="components-tooltip-demo-arrow-point-at-center">
      <div>
        <Tooltip placement="topLeft" title="Prompt Text">
          <Button>Align edge / 边缘对齐</Button>
        </Tooltip>
        <Tooltip placement="topLeft" title="Prompt Text" arrowPointAtCenter>
          <Button>Arrow points to center / 箭头指向中心</Button>
        </Tooltip>
      </div>
    </div>
  </div>
);
