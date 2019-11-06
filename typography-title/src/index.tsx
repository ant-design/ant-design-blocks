import React from "react";
import { Typography } from "antd";

const { Title } = Typography;

export default () => (
  <div className="container">
    <div id="components-typography-demo-title">
      <div>
        <Title>h1. Ant Design</Title>
        <Title level={2}>h2. Ant Design</Title>
        <Title level={3}>h3. Ant Design</Title>
        <Title level={4}>h4. Ant Design</Title>
      </div>
    </div>
  </div>
);
