import React from "react";
import styles from "./index.less";
import { Steps, Icon } from "antd";

const { Step } = Steps;

export default () => (
  <div className={styles.container}>
    <div id="components-steps-demo-icon">
      <Steps>
        <Step status="finish" title="Login" icon={<Icon type="user" />} />
        <Step
          status="finish"
          title="Verification"
          icon={<Icon type="solution" />}
        />
        <Step status="process" title="Pay" icon={<Icon type="loading" />} />
        <Step status="wait" title="Done" icon={<Icon type="smile-o" />} />
      </Steps>
    </div>
  </div>
);
