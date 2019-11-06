import React from "react";
import styles from "./index.less";
import { Card } from "antd";

export default () => (
  <div className={styles.container}>
    <div id="components-card-demo-border-less">
      <div style={{ background: "#ECECEC", padding: "30px" }}>
        <Card title="Card title" bordered={false} style={{ width: 300 }}>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
      </div>
    </div>
  </div>
);
