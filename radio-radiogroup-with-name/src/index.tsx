import React from "react";
import { Radio } from "antd";

function App() {
  return (
    <Radio.Group name="radiogroup" defaultValue={1}>
      <Radio value={1}>A</Radio>
      <Radio value={2}>B</Radio>
      <Radio value={3}>C</Radio>
      <Radio value={4}>D</Radio>
    </Radio.Group>
  );
}

export default () => (
  <div className="container">
    <div id="components-radio-demo-radiogroup-with-name">
      <App />
    </div>
  </div>
);
