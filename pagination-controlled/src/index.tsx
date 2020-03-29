import React from "react";
import styles from "./index.less";
import { Pagination } from "antd";

class App extends React.Component {
  state = {
    current: 3
  };

  onChange = page => {
    console.log(page);
    this.setState({
      current: page
    });
  };

  render() {
    return (
      <Pagination
        current={this.state.current}
        onChange={this.onChange}
        total={50}
      />
    );
  }
}

export default () => (
  <div className={styles.container}>
    <div id="components-pagination-demo-controlled">
      <App />
    </div>
  </div>
);
