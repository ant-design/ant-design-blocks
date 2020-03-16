import React from "react";
import styles from "./index.less";
import { Layout, Menu } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined
} from "@ant-design/icons";

const { Header, Sider, Content } = Layout;

class SiderDemo extends React.Component {
  state = {
    collapsed: false
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  render() {
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1">
              <UserOutlined />
              <span>nav 1</span>
            </Menu.Item>
            <Menu.Item key="2">
              <VideoCameraOutlined />
              <span>nav 2</span>
            </Menu.Item>
            <Menu.Item key="3">
              <UploadOutlined />
              <span>nav 3</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(
              this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: "trigger",
                onClick: this.toggle
              }
            )}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280
            }}
          >
            Content
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default () => (
  <div className={styles.container}>
    <div id="components-layout-demo-custom-trigger">
      <SiderDemo />
    </div>
  </div>
);
