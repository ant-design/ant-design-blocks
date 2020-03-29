import React from "react";
import styles from "./index.less";
import { Card, Avatar } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined
} from "@ant-design/icons";

const { Meta } = Card;

export default () => (
  <div className={styles.container}>
    <div id="components-card-demo-meta">
      <Card
        style={{ width: 300 }}
        cover={
          <img
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />
        }
        actions={[
          <SettingOutlined key="setting" />,
          <EditOutlined key="edit" />,
          <EllipsisOutlined key="ellipsis" />
        ]}
      >
        <Meta
          avatar={
            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          }
          title="Card title"
          description="This is the description"
        />
      </Card>
    </div>
  </div>
);
