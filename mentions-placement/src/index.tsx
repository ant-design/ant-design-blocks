import React from "react";
import styles from "./index.less";
import { Mentions } from "antd";

const { Option } = Mentions;

export default () => (
  <div className={styles.container}>
    <div id="components-mentions-demo-placement">
      <Mentions style={{ width: "100%" }} placement="top">
        <Option value="afc163">afc163</Option>
        <Option value="zombieJ">zombieJ</Option>
        <Option value="yesmeck">yesmeck</Option>
      </Mentions>
    </div>
  </div>
);
