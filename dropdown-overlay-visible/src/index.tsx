import React from "react";
import styles from "./index.less";
import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";

class OverlayVisible extends React.Component {
  state = {
    visible: false
  };

  handleMenuClick = e => {
    if (e.key === "3") {
      this.setState({ visible: false });
    }
  };

  handleVisibleChange = flag => {
    this.setState({ visible: flag });
  };

  render() {
    const menu = (
      <Menu onClick={this.handleMenuClick}>
        <Menu.Item key="1">Clicking me will not close the menu.</Menu.Item>
        <Menu.Item key="2">Clicking me will not close the menu also.</Menu.Item>
        <Menu.Item key="3">Clicking me will close the menu.</Menu.Item>
      </Menu>
    );
    return (
      <Dropdown
        overlay={menu}
        onVisibleChange={this.handleVisibleChange}
        visible={this.state.visible}
      >
        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
          Hover me <DownOutlined />
        </a>
      </Dropdown>
    );
  }
}

export default () => (
  <div className={styles.container}>
    <div id="components-dropdown-demo-overlay-visible">
      <OverlayVisible />
    </div>
  </div>
);
