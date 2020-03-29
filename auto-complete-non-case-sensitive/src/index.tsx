import React from "react";
import styles from "./index.less";
import { AutoComplete } from "antd";

const options = [
  { value: "Burns Bay Road" },
  { value: "Downing Street" },
  { value: "Wall Street" },
];

const Complete: React.FC = () => {
  return (
    <AutoComplete
      style={{ width: 200 }}
      options={options}
      placeholder="try to type `b`"
      filterOption={(inputValue, option) =>
        option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
      }
    />
  );
};

export default () => (
  <div className={styles.container}>
    <div id="components-auto-complete-demo-non-case-sensitive">
      <Complete />
    </div>
  </div>
);
