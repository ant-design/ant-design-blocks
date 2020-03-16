import React from "react";
import styles from "./index.less";
import { Row, Col, Divider } from "antd";

const DemoBox = props => (
  <p className={`height-${props.value}`}>{props.children}</p>
);

export default () => (
  <div className={styles.container}>
    <div id="components-grid-demo-flex-align">
      <>
        <Divider
          orientation="left"
          style={{ color: "#333", fontWeight: "normal" }}
        >
          Align Top
        </Divider>
        <Row justify="center" align="top">
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

        <Divider
          orientation="left"
          style={{ color: "#333", fontWeight: "normal" }}
        >
          Align Middle
        </Divider>
        <Row justify="space-around" align="middle">
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

        <Divider
          orientation="left"
          style={{ color: "#333", fontWeight: "normal" }}
        >
          Align Bottom
        </Divider>
        <Row justify="space-between" align="bottom">
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
      </>
    </div>
  </div>
);
