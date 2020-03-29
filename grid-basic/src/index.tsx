import React from "react";
import styles from "./index.less";
import { Row, Col } from "antd";

export default () => (
  <div className={styles.container}>
    <div id="components-grid-demo-basic">
      <>
        <Row>
          <Col span={24}>col</Col>
        </Row>
        <Row>
          <Col span={12}>col-12</Col>
          <Col span={12}>col-12</Col>
        </Row>
        <Row>
          <Col span={8}>col-8</Col>
          <Col span={8}>col-8</Col>
          <Col span={8}>col-8</Col>
        </Row>
        <Row>
          <Col span={6}>col-6</Col>
          <Col span={6}>col-6</Col>
          <Col span={6}>col-6</Col>
          <Col span={6}>col-6</Col>
        </Row>
      </>
    </div>
  </div>
);
