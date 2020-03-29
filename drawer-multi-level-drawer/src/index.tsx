import React from "react";
import styles from "./index.less";
import { Drawer, Button } from "antd";

class App extends React.Component {
  state = { visible: false, childrenDrawer: false };

  showDrawer = () => {
    this.setState({
      visible: true
    });
  };

  onClose = () => {
    this.setState({
      visible: false
    });
  };

  showChildrenDrawer = () => {
    this.setState({
      childrenDrawer: true
    });
  };

  onChildrenDrawerClose = () => {
    this.setState({
      childrenDrawer: false
    });
  };

  render() {
    return (
      <div>
        <Button type="primary" onClick={this.showDrawer}>
          Open drawer
        </Button>
        <Drawer
          title="Multi-level drawer"
          width={520}
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
        >
          <Button type="primary" onClick={this.showChildrenDrawer}>
            Two-level drawer
          </Button>
          <Drawer
            title="Two-level Drawer"
            width={320}
            closable={false}
            onClose={this.onChildrenDrawerClose}
            visible={this.state.childrenDrawer}
          >
            This is two-level drawer
          </Drawer>
        </Drawer>
      </div>
    );
  }
}

export default () => (
  <div className={styles.container}>
    <div id="components-drawer-demo-multi-level-drawer">
      <App />
    </div>
  </div>
);
