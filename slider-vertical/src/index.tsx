import React from "react";
import { Slider } from "antd";

const style = {
  display: "inline-block",
  height: 300,
  marginLeft: 70
};

const marks = {
  0: "0°C",
  26: "26°C",
  37: "37°C",
  100: {
    style: {
      color: "#f50"
    },
    label: <strong>100°C</strong>
  }
};

export default () => (
  <div className="container">
    <div id="components-slider-demo-vertical">
      <div>
        <div style={style}>
          <Slider vertical defaultValue={30} />
        </div>
        <div style={style}>
          <Slider vertical range step={10} defaultValue={[20, 50]} />
        </div>
        <div style={style}>
          <Slider vertical range marks={marks} defaultValue={[26, 37]} />
        </div>
      </div>
    </div>
  </div>
);
