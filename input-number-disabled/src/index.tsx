import React from "react";
import styles from "./index.less";
import { InputNumber, Button } from "antd";

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
        <InputNumber
          min={1}
          max={10}
          disabled={this.state.disabled}
          defaultValue={3}
        />
        <div style={{ marginTop: 20 }}>
          <Button onClick={this.toggle} type="primary">
            Toggle disabled
          </Button>
        </div>
      </div>
    );
  }
}

export default () => (
  <div className={styles.container}>
    <div id="components-input-number-demo-disabled">
      <App />
    </div>
  </div>
);
