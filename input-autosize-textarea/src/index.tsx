import React from "react";
import styles from "./index.less";
import { Input } from "antd";

const { TextArea } = Input;

class Demo extends React.Component {
  state = {
    value: ""
  };

  onChange = ({ target: { value } }) => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;

    return (
      <div>
        <TextArea
          placeholder="Autosize height based on content lines"
          autoSize
        />
        <div style={{ margin: "24px 0" }} />
        <TextArea
          placeholder="Autosize height with minimum and maximum number of lines"
          autoSize={{ minRows: 2, maxRows: 6 }}
        />
        <div style={{ margin: "24px 0" }} />
        <TextArea
          value={value}
          onChange={this.onChange}
          placeholder="Controlled autosize"
          autoSize={{ minRows: 3, maxRows: 5 }}
        />
      </div>
    );
  }
}

export default () => (
  <div className={styles.container}>
    <div id="components-input-demo-autosize-textarea">
      <Demo />
    </div>
  </div>
);
