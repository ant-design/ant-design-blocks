import React from "react";
import styles from "./index.less";
import { Button } from "antd";

export default () => (
  <div className={styles.container}>
    <div id="components-button-demo-danger">
      <>
        <Button type="primary" danger>
          Primary
        </Button>
        <Button danger>Default</Button>
        <Button type="dashed" danger>
          link
        </Button>
        <Button type="link" danger>
          link
        </Button>
      </>
    </div>
  </div>
);
