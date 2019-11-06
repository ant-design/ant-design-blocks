import React from "react";
import { Drawer, Button } from "antd";

class App extends React.Component {
  state = { visible: false };

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

  render() {
    return (
      <div
        style={{
          height: 200,
          overflow: "hidden",
          position: "relative",
          border: "1px solid #ebedf0",
          borderRadius: 2,
          padding: 48,
          textAlign: "center",
          background: "#fafafa"
        }}
      >
        Render in this
        <div style={{ marginTop: 16 }}>
          <Button type="primary" onClick={this.showDrawer}>
            Open
          </Button>
        </div>
        <Drawer
          title="Basic Drawer"
          placement="right"
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
          getContainer={false}
          style={{ position: "absolute" }}
        >
          <p>Some contents...</p>
        </Drawer>
      </div>
    );
  }
}

export default () => (
  <div className="container">
    <div id="components-drawer-demo-render-in-current">
      <App />
    </div>
  </div>
);
