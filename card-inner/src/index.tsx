import React from "react";
import styles from "./index.less";
import { Card } from "antd";

export default () => (
  <div className={styles.container}>
    <div id="components-card-demo-inner">
      <Card title="Card title">
        <p className="site-card-demo-inner-p">Group title</p>
        <Card
          type="inner"
          title="Inner Card title"
          extra={<a href="#">More</a>}
        >
          Inner Card content
        </Card>
        <Card
          style={{ marginTop: 16 }}
          type="inner"
          title="Inner Card title"
          extra={<a href="#">More</a>}
        >
          Inner Card content
        </Card>
      </Card>
    </div>
  </div>
);
