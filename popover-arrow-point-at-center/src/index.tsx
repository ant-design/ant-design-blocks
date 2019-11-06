import React from "react";
import styles from "./index.less";
import { Popover, Button } from "antd";

const text = <span>Title</span>;
const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);

export default () => (
  <div className={styles.container}>
    <div id="components-popover-demo-arrow-point-at-center">
      <div>
        <Popover placement="topLeft" title={text} content={content}>
          <Button>Align edge / 边缘对齐</Button>
        </Popover>
        <Popover
          placement="topLeft"
          title={text}
          content={content}
          arrowPointAtCenter
        >
          <Button>Arrow points to center / 箭头指向中心</Button>
        </Popover>
      </div>
    </div>
  </div>
);
