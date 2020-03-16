import React from "react";
import styles from "./index.less";
import { Select } from "antd";

const { Option } = Select;

function onChange(value) {
  console.log(`selected ${value}`);
}

function onBlur() {
  console.log("blur");
}

function onFocus() {
  console.log("focus");
}

function onSearch(val) {
  console.log("search:", val);
}

export default () => (
  <div className={styles.container}>
    <div id="components-select-demo-search">
      <Select
        showSearch
        style={{ width: 200 }}
        placeholder="Select a person"
        optionFilterProp="children"
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        onSearch={onSearch}
        filterOption={(input, option) =>
          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
      >
        <Option value="jack">Jack</Option>
        <Option value="lucy">Lucy</Option>
        <Option value="tom">Tom</Option>
      </Select>
    </div>
  </div>
);
