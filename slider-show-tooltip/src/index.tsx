import React from "react";
import styles from "./index.less";
import { Slider } from "antd";

export default () => (
  <div className={styles.container}>
    <div id="components-slider-demo-show-tooltip">
      <Slider defaultValue={30} tooltipVisible />
    </div>
  </div>
);
