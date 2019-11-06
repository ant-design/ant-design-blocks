import React from "react";
import styles from "./index.less";
import { Button } from "antd";

export default () => (
  <div className={styles.container}>
    <div id="components-button-demo-ghost">
      <div
        style={{ background: "rgb(190, 200, 200)", padding: "26px 16px 16px" }}
      >
        <Button type="primary" ghost>
          Primary
        </Button>
        <Button ghost>Default</Button>
        <Button type="dashed" ghost>
          Dashed
        </Button>
        <Button type="danger" ghost>
          danger
        </Button>
        <Button type="link" ghost>
          link
        </Button>
      </div>
    </div>
  </div>
);
