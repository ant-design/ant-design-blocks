import React from "react";
import styles from "./index.less";
import { Menu } from "antd";
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined
} from "@ant-design/icons";

const { SubMenu } = Menu;

class App extends React.Component {
  state = {
    current: "mail"
  };

  handleClick = e => {
    console.log("click ", e);
    this.setState({
      current: e.key
    });
  };

  render() {
    return (
      <Menu
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
      >
        <Menu.Item key="mail">
          <MailOutlined />
          Navigation One
        </Menu.Item>
        <Menu.Item key="app" disabled>
          <AppstoreOutlined />
          Navigation Two
        </Menu.Item>
        <SubMenu
          title={
            <span className="submenu-title-wrapper">
              <SettingOutlined />
              Navigation Three - Submenu
            </span>
          }
        >
          <Menu.ItemGroup title="Item 1">
            <Menu.Item key="setting:1">Option 1</Menu.Item>
            <Menu.Item key="setting:2">Option 2</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup title="Item 2">
            <Menu.Item key="setting:3">Option 3</Menu.Item>
            <Menu.Item key="setting:4">Option 4</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
        <Menu.Item key="alipay">
          <a
            href="https://ant.design"
            target="_blank"
            rel="noopener noreferrer"
          >
            Navigation Four - Link
          </a>
        </Menu.Item>
      </Menu>
    );
  }
}

export default () => (
  <div className={styles.container}>
    <div id="components-menu-demo-horizontal">
      <App />
    </div>
  </div>
);
