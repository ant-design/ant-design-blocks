import React from "react";
import styles from "./index.less";
import { Alert } from "antd";

const onClose = e => {
  console.log(e, "I was closed.");
};

export default () => (
  <div className={styles.container}>
    <div id="components-alert-demo-closable">
      <div>
        <Alert
          message="Warning Text Warning Text Warning TextW arning Text Warning Text Warning TextWarning Text"
          type="warning"
          closable
          onClose={onClose}
        />
        <Alert
          message="Error Text"
          description="Error Description Error Description Error Description Error Description Error Description Error Description"
          type="error"
          closable
          onClose={onClose}
        />
      </div>
    </div>
  </div>
);
