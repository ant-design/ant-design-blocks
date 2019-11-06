import React from "react";
import { Icon } from "antd";

export default () => (
  <div className="container">
    <div id="components-icon-demo-basic">
      <div className="icons-list">
        <Icon type="home" />
        <Icon type="setting" theme="filled" />
        <Icon type="smile" theme="outlined" />
        <Icon type="sync" spin />
        <Icon type="smile" rotate={180} />
        <Icon type="loading" />
      </div>
    </div>
  </div>
);
