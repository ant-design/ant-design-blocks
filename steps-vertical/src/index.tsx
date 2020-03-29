import React from "react";
import styles from "./index.less";
import { Steps } from "antd";

const { Step } = Steps;

export default () => (
  <div className={styles.container}>
    <div id="components-steps-demo-vertical">
      <Steps direction="vertical" current={1}>
        <Step title="Finished" description="This is a description." />
        <Step title="In Progress" description="This is a description." />
        <Step title="Waiting" description="This is a description." />
      </Steps>
    </div>
  </div>
);
