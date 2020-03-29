import React from "react";
import styles from "./index.less";
import { Row, Col, Divider } from "antd";

const style = { background: "#0092ff", padding: "8px 0" };

export default () => (
  <div className={styles.container}>
    <div id="components-grid-demo-gutter">
      <>
        <Divider
          orientation="left"
          style={{ color: "#333", fontWeight: "normal" }}
        >
          Horizontal
        </Divider>
        <Row gutter={16}>
          <Col className="gutter-row" span={6}>
            <div style={style}>col-6</div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div style={style}>col-6</div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div style={style}>col-6</div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div style={style}>col-6</div>
          </Col>
        </Row>
        <Divider
          orientation="left"
          style={{ color: "#333", fontWeight: "normal" }}
        >
          Responsive
        </Divider>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col className="gutter-row" span={6}>
            <div style={style}>col-6</div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div style={style}>col-6</div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div style={style}>col-6</div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div style={style}>col-6</div>
          </Col>
        </Row>
        <Divider
          orientation="left"
          style={{ color: "#333", fontWeight: "normal" }}
        >
          Vertical
        </Divider>
        <Row gutter={[16, 24]}>
          <Col className="gutter-row" span={6}>
            <div style={style}>col-6</div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div style={style}>col-6</div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div style={style}>col-6</div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div style={style}>col-6</div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div style={style}>col-6</div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div style={style}>col-6</div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div style={style}>col-6</div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div style={style}>col-6</div>
          </Col>
        </Row>
      </>
    </div>
  </div>
);
