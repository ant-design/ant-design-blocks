import React from "react";
import styles from "./index.less";
import { Result, Button } from "antd";

export default () => (
  <div className={styles.container}>
    <div id="components-result-demo-500">
      <Result
        status="500"
        title="500"
        subTitle="Sorry, the server is wrong."
        extra={<Button type="primary">Back Home</Button>}
      />
    </div>
  </div>
);
