import React from "react";
import styles from "./index.less";
import { Menu, Dropdown, message } from "antd";
import { DownOutlined } from "@ant-design/icons";

const onClick = ({ key }) => {
  message.info(`Click on item ${key}`);
};

const menu = (
  <Menu onClick={onClick}>
    <Menu.Item key="1">1st menu item</Menu.Item>
    <Menu.Item key="2">2nd memu item</Menu.Item>
    <Menu.Item key="3">3rd menu item</Menu.Item>
  </Menu>
);

export default () => (
  <div className={styles.container}>
    <div id="components-dropdown-demo-event">
      <Dropdown overlay={menu}>
        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
          Hover me, Click menu item <DownOutlined />
        </a>
      </Dropdown>
    </div>
  </div>
);
