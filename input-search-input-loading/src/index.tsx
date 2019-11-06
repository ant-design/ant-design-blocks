import React from "react";
import { Input } from "antd";

const { Search } = Input;

export default () => (
  <div className="container">
    <div id="components-input-demo-search-input-loading">
      <div>
        <Search placeholder="input search loading deault" loading />
        <br />
        <br />
        <Search
          placeholder="input search loading with enterButton"
          loading
          enterButton
        />
      </div>
    </div>
  </div>
);
