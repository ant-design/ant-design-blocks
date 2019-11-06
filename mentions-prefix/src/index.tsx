import React from "react";
import styles from "./index.less";
import { Mentions } from "antd";

const { Option } = Mentions;

const MOCK_DATA = {
  "@": ["afc163", "zombiej", "yesmeck"],
  "#": ["1.0", "2.0", "3.0"]
};

class App extends React.Component {
  state = {
    prefix: "@"
  };

  onSearch = (_, prefix) => {
    this.setState({ prefix });
  };

  render() {
    const { prefix } = this.state;

    return (
      <Mentions
        style={{ width: "100%" }}
        placeholder="input @ to mention people, # to mention tag"
        prefix={["@", "#"]}
        onSearch={this.onSearch}
      >
        {(MOCK_DATA[prefix] || []).map(value => (
          <Option key={value} value={value}>
            {value}
          </Option>
        ))}
      </Mentions>
    );
  }
}

export default () => (
  <div className={styles.container}>
    <div id="components-mentions-demo-prefix">
      <App />
    </div>
  </div>
);
