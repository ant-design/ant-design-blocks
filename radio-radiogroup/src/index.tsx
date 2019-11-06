import React from "react";
import styles from "./index.less";
import { Radio } from "antd";

class App extends React.Component {
  state = {
    value: 1
  };

  onChange = e => {
    console.log("radio checked", e.target.value);
    this.setState({
      value: e.target.value
    });
  };

  render() {
    return (
      <Radio.Group onChange={this.onChange} value={this.state.value}>
        <Radio value={1}>A</Radio>
        <Radio value={2}>B</Radio>
        <Radio value={3}>C</Radio>
        <Radio value={4}>D</Radio>
      </Radio.Group>
    );
  }
}

export default () => (
  <div className={styles.container}>
    <div id="components-radio-demo-radiogroup">
      <App />
    </div>
  </div>
);
