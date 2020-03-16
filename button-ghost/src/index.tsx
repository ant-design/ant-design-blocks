import React from "react";
import styles from "./index.less";
import { Button } from "antd";

export default () => (
  <div className={styles.container}>
    <div id="components-button-demo-ghost">
      <div className="site-button-ghost-wrapper">
        <Button type="primary" ghost>
          Primary
        </Button>
        <Button ghost>Default</Button>
        <Button type="dashed" ghost>
          link
        </Button>
        <Button type="link" ghost>
          link
        </Button>
      </div>
    </div>
  </div>
);
