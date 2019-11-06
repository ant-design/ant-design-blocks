import React from "react";
import styles from "./index.less";
import { Result, Button } from "antd";

export default () => (
  <div className={styles.container}>
    <div id="components-result-demo-info">
      <Result
        title="Your operation has been executed"
        extra={
          <Button type="primary" key="console">
            Go Console
          </Button>
        }
      />
    </div>
  </div>
);
