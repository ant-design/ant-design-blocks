import React from "react";
import styles from "./index.less";
import { Input } from "antd";

const { Search } = Input;

export default () => (
  <div className={styles.container}>
    <div id="components-input-demo-search-input">
      <div>
        <Search
          placeholder="input search text"
          onSearch={value => console.log(value)}
          style={{ width: 200 }}
        />
        <br />
        <br />
        <Search
          placeholder="input search text"
          onSearch={value => console.log(value)}
          enterButton
        />
        <br />
        <br />
        <Search
          placeholder="input search text"
          enterButton="Search"
          size="large"
          onSearch={value => console.log(value)}
        />
      </div>
    </div>
  </div>
);
