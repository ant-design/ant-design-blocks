import React from "react";
import styles from "./index.less";
import { Switch, Button } from "antd";

class App extends React.Component {
  state = {
    disabled: true
  };

  toggle = () => {
    this.setState({
      disabled: !this.state.disabled
    });
  };

  render() {
    return (
      <div>
        <Switch disabled={this.state.disabled} defaultChecked />
        <br />
        <Button type="primary" onClick={this.toggle}>
          Toggle disabled
        </Button>
      </div>
    );
  }
}

export default () => (
  <div className={styles.container}>
    <div id="components-switch-demo-disabled">
      <App />
    </div>
  </div>
);
