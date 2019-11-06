import React from "react";
import { Slider } from "antd";

function formatter(value) {
  return `${value}%`;
}

export default () => (
  <div className="container">
    <div id="components-slider-demo-tip-formatter">
      <div>
        <Slider tipFormatter={formatter} />
        <Slider tipFormatter={null} />
      </div>
    </div>
  </div>
);
