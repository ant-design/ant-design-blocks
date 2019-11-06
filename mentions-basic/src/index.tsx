import React from "react";
import styles from "./index.less";
import { Mentions } from "antd";

const { Option } = Mentions;

function onChange(value) {
  console.log("Change:", value);
}

function onSelect(option) {
  console.log("select", option);
}

export default () => (
  <div className={styles.container}>
    <div id="components-mentions-demo-basic">
      <Mentions
        style={{ width: "100%" }}
        onChange={onChange}
        onSelect={onSelect}
        defaultValue="@afc163"
      >
        <Option value="afc163">afc163</Option>
        <Option value="zombieJ">zombieJ</Option>
        <Option value="yesmeck">yesmeck</Option>
      </Mentions>
    </div>
  </div>
);
