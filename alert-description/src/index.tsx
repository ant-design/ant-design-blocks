import React from "react";
import styles from "./index.less";
import { Alert } from "antd";

export default () => (
  <div className={styles.container}>
    <div id="components-alert-demo-description">
      <div>
        <Alert
          message="Success Text"
          description="Success Description Success Description Success Description"
          type="success"
        />
        <Alert
          message="Info Text"
          description="Info Description Info Description Info Description Info Description"
          type="info"
        />
        <Alert
          message="Warning Text"
          description="Warning Description Warning Description Warning Description Warning Description"
          type="warning"
        />
        <Alert
          message="Error Text"
          description="Error Description Error Description Error Description Error Description"
          type="error"
        />
      </div>
    </div>
  </div>
);
