import React from "react";
import styles from "./index.less";
import { Row, Col } from "antd";

export default () => (
  <div className={styles.container}>
    <div id="components-grid-demo-offset">
      <>
        <Row>
          <Col span={8}>col-8</Col>
          <Col span={8} offset={8}>
            col-8
          </Col>
        </Row>
        <Row>
          <Col span={6} offset={6}>
            col-6 col-offset-6
          </Col>
          <Col span={6} offset={6}>
            col-6 col-offset-6
          </Col>
        </Row>
        <Row>
          <Col span={12} offset={6}>
            col-12 col-offset-6
          </Col>
        </Row>
      </>
    </div>
  </div>
);
