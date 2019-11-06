import React from "react";
import { Steps } from "antd";

const { Step } = Steps;

export default () => (
  <div className="container">
    <div id="components-steps-demo-error">
      <Steps current={1} status="error">
        <Step title="Finished" description="This is a description" />
        <Step title="In Process" description="This is a description" />
        <Step title="Waiting" description="This is a description" />
      </Steps>
    </div>
  </div>
);
