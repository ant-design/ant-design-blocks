import React from "react";
import styles from "./index.less";
import { Slider } from "antd";

function formatter(value) {
  return `${value}%`;
}

export default () => (
  <div className={styles.container}>
    <div id="components-slider-demo-tip-formatter">
      <div>
        <Slider tipFormatter={formatter} />
        <Slider tipFormatter={null} />
      </div>
    </div>
  </div>
);
