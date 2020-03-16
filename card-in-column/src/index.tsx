import React from "react";
import styles from "./index.less";
import { Card, Col, Row } from "antd";

export default () => (
  <div className={styles.container}>
    <div id="components-card-demo-in-column">
      <div className="site-card-wrapper">
        <Row gutter={16}>
          <Col span={8}>
            <Card title="Card title" bordered={false}>
              Card content
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Card title" bordered={false}>
              Card content
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Card title" bordered={false}>
              Card content
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  </div>
);
