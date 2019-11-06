import React from "react";
import styles from "./index.less";
import { Result, Button } from "antd";

export default () => (
  <div className={styles.container}>
    <div id="components-result-demo-success">
      <Result
        status="success"
        title="Successfully Purchased Cloud Server ECS!"
        subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
        extra={[
          <Button type="primary" key="console">
            Go Console
          </Button>,
          <Button key="buy">Buy Again</Button>
        ]}
      />
    </div>
  </div>
);
