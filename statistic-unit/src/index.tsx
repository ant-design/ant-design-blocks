import React from "react";
import styles from "./index.less";
import { Statistic, Row, Col } from "antd";
import { LikeOutlined } from "@ant-design/icons";

export default () => (
  <div className={styles.container}>
    <div id="components-statistic-demo-unit">
      <Row gutter={16}>
        <Col span={12}>
          <Statistic title="Feedback" value={1128} prefix={<LikeOutlined />} />
        </Col>
        <Col span={12}>
          <Statistic title="Unmerged" value={93} suffix="/ 100" />
        </Col>
      </Row>
    </div>
  </div>
);
