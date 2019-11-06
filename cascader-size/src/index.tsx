import React from "react";
import styles from "./index.less";
import { Cascader } from "antd";

const options = [
  {
    value: "zhejiang",
    label: "Zhejiang",
    children: [
      {
        value: "hangzhou",
        label: "Hangzhou",
        children: [
          {
            value: "xihu",
            label: "West Lake"
          }
        ]
      }
    ]
  },
  {
    value: "jiangsu",
    label: "Jiangsu",
    children: [
      {
        value: "nanjing",
        label: "Nanjing",
        children: [
          {
            value: "zhonghuamen",
            label: "Zhong Hua Men"
          }
        ]
      }
    ]
  }
];

function onChange(value) {
  console.log(value);
}

export default () => (
  <div className={styles.container}>
    <div id="components-cascader-demo-size">
      <div>
        <Cascader size="large" options={options} onChange={onChange} />
        <br />
        <br />
        <Cascader options={options} onChange={onChange} />
        <br />
        <br />
        <Cascader size="small" options={options} onChange={onChange} />
        <br />
        <br />
      </div>
    </div>
  </div>
);
