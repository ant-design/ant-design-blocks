import React from "react";
import { Slider } from "antd";

export default () => (
  <div className="container">
    <div id="components-slider-demo-show-tooltip">
      <Slider defaultValue={30} tooltipVisible />
    </div>
  </div>
);
