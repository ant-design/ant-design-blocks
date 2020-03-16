import React from "react";
import styles from "./index.less";
import { Row, Col, Divider } from "antd";

export default () => (
  <div className={styles.container}>
    <div id="components-grid-demo-flex">
      <>
        <Divider
          orientation="left"
          style={{ color: "#333", fontWeight: "normal" }}
        >
          sub-element align left
        </Divider>
        <Row justify="start">
          <Col span={4}>col-4</Col>
          <Col span={4}>col-4</Col>
          <Col span={4}>col-4</Col>
          <Col span={4}>col-4</Col>
        </Row>

        <Divider
          orientation="left"
          style={{ color: "#333", fontWeight: "normal" }}
        >
          sub-element align center
        </Divider>
        <Row justify="center">
          <Col span={4}>col-4</Col>
          <Col span={4}>col-4</Col>
          <Col span={4}>col-4</Col>
          <Col span={4}>col-4</Col>
        </Row>

        <Divider
          orientation="left"
          style={{ color: "#333", fontWeight: "normal" }}
        >
          sub-element align right
        </Divider>
        <Row justify="end">
          <Col span={4}>col-4</Col>
          <Col span={4}>col-4</Col>
          <Col span={4}>col-4</Col>
          <Col span={4}>col-4</Col>
        </Row>

        <Divider
          orientation="left"
          style={{ color: "#333", fontWeight: "normal" }}
        >
          sub-element monospaced arrangement
        </Divider>
        <Row justify="space-between">
          <Col span={4}>col-4</Col>
          <Col span={4}>col-4</Col>
          <Col span={4}>col-4</Col>
          <Col span={4}>col-4</Col>
        </Row>

        <Divider
          orientation="left"
          style={{ color: "#333", fontWeight: "normal" }}
        >
          sub-element align full
        </Divider>
        <Row justify="space-around">
          <Col span={4}>col-4</Col>
          <Col span={4}>col-4</Col>
          <Col span={4}>col-4</Col>
          <Col span={4}>col-4</Col>
        </Row>
      </>
    </div>
  </div>
);
