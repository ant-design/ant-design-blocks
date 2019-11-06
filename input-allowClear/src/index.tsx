import React from "react";
import { Input } from "antd";

const { TextArea } = Input;

const onChange = e => {
  console.log(e);
};

export default () => (
  <div className="container">
    <div id="components-input-demo-allowClear">
      <div>
        <Input
          placeholder="input with clear icon"
          allowClear
          onChange={onChange}
        />
        <br />
        <br />
        <TextArea
          placeholder="textarea with clear icon"
          allowClear
          onChange={onChange}
        />
      </div>
    </div>
  </div>
);
