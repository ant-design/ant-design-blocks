import React from "react";
import { Checkbox } from "antd";

function onChange(e) {
  console.log(`checked = ${e.target.checked}`);
}

export default () => (
  <div className="container">
    <div id="components-checkbox-demo-basic">
      <Checkbox onChange={onChange}>Checkbox</Checkbox>
    </div>
  </div>
);
