import React from "react";
import styles from "./index.less";
import { Card } from "antd";

const { Meta } = Card;

export default () => (
  <div className={styles.container}>
    <div id="components-card-demo-flexible-content">
      <Card
        hoverable
        style={{ width: 240 }}
        cover={
          <img
            alt="example"
            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
          />
        }
      >
        <Meta title="Europe Street beat" description="www.instagram.com" />
      </Card>
    </div>
  </div>
);
