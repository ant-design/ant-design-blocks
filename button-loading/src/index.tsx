import React from "react";
import styles from "./index.less";
import { Button } from "antd";

class App extends React.Component {
  state = {
    loading: false,
    iconLoading: false
  };

  enterLoading = () => {
    this.setState({ loading: true });
  };

  enterIconLoading = () => {
    this.setState({ iconLoading: true });
  };

  render() {
    return (
      <div>
        <Button type="primary" loading>
          Loading
        </Button>
        <Button type="primary" size="small" loading>
          Loading
        </Button>
        <br />
        <Button
          type="primary"
          loading={this.state.loading}
          onClick={this.enterLoading}
        >
          Click me!
        </Button>
        <Button
          type="primary"
          icon="poweroff"
          loading={this.state.iconLoading}
          onClick={this.enterIconLoading}
        >
          Click me!
        </Button>
        <br />
        <Button type="primary" loading />
        <Button type="primary" shape="circle" loading />
        <Button type="danger" shape="round" loading />
      </div>
    );
  }
}

export default () => (
  <div className={styles.container}>
    <div id="components-button-demo-loading">
      <App />
    </div>
  </div>
);
