import React from "react";
import styles from "./index.less";
import { Spin, Alert } from "antd";

export default () => (
  <div className={styles.container}>
    <div id="components-spin-demo-tip">
      <Spin tip="Loading...">
        <Alert
          message="Alert message title"
          description="Further details about the context of this alert."
          type="info"
        />
      </Spin>
    </div>
  </div>
);
