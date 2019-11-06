import React from "react";
import { InputNumber } from "antd";

function onChange(value) {
  console.log("changed", value);
}

export default () => (
  <div className="container">
    <div id="components-input-number-demo-size">
      <div>
        <InputNumber
          size="large"
          min={1}
          max={100000}
          defaultValue={3}
          onChange={onChange}
        />
        <InputNumber
          min={1}
          max={100000}
          defaultValue={3}
          onChange={onChange}
        />
        <InputNumber
          size="small"
          min={1}
          max={100000}
          defaultValue={3}
          onChange={onChange}
        />
      </div>
    </div>
  </div>
);
