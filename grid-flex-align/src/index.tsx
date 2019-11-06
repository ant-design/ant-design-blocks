import React from "react";
import { Row, Col } from "antd";

const DemoBox = props => (
  <p className={`height-${props.value}`}>{props.children}</p>
);

export default () => (
  <div className="container">
    <div id="components-grid-demo-flex-align">
      <div>
        <p>Align Top</p>
        <Row type="flex" justify="center" align="top">
          <Col span={4}>
            <DemoBox value={100}>col-4</DemoBox>
          </Col>
          <Col span={4}>
            <DemoBox value={50}>col-4</DemoBox>
          </Col>
          <Col span={4}>
            <DemoBox value={120}>col-4</DemoBox>
          </Col>
          <Col span={4}>
            <DemoBox value={80}>col-4</DemoBox>
          </Col>
        </Row>

        <p>Align Center</p>
        <Row type="flex" justify="space-around" align="middle">
          <Col span={4}>
            <DemoBox value={100}>col-4</DemoBox>
          </Col>
          <Col span={4}>
            <DemoBox value={50}>col-4</DemoBox>
          </Col>
          <Col span={4}>
            <DemoBox value={120}>col-4</DemoBox>
          </Col>
          <Col span={4}>
            <DemoBox value={80}>col-4</DemoBox>
          </Col>
        </Row>

        <p>Align Bottom</p>
        <Row type="flex" justify="space-between" align="bottom">
          <Col span={4}>
            <DemoBox value={100}>col-4</DemoBox>
          </Col>
          <Col span={4}>
            <DemoBox value={50}>col-4</DemoBox>
          </Col>
          <Col span={4}>
            <DemoBox value={120}>col-4</DemoBox>
          </Col>
          <Col span={4}>
            <DemoBox value={80}>col-4</DemoBox>
          </Col>
        </Row>
      </div>
    </div>
  </div>
);
