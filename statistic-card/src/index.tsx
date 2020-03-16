import React from "react";
import styles from "./index.less";
import { Statistic, Card, Row, Col } from "antd";
import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons";

export default () => (
  <div className={styles.container}>
    <div id="components-statistic-demo-card">
      <div className="site-statistic-demo-card">
        <Row gutter={16}>
          <Col span={12}>
            <Card>
              <Statistic
                title="Active"
                value={11.28}
                precision={2}
                valueStyle={{ color: "#3f8600" }}
                prefix={<ArrowUpOutlined />}
                suffix="%"
              />
            </Card>
          </Col>
          <Col span={12}>
            <Card>
              <Statistic
                title="Idle"
                value={9.3}
                precision={2}
                valueStyle={{ color: "#cf1322" }}
                prefix={<ArrowDownOutlined />}
                suffix="%"
              />
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  </div>
);
