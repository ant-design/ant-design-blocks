import React from "react";
import styles from "./index.less";
import { DatePicker, Radio } from "antd";

const { RangePicker } = DatePicker;

class PickerSizesDemo extends React.Component {
  state = {
    size: "default"
  };

  handleSizeChange = e => {
    this.setState({ size: e.target.value });
  };

  render() {
    const { size } = this.state;
    return (
      <div>
        <Radio.Group value={size} onChange={this.handleSizeChange}>
          <Radio.Button value="large">Large</Radio.Button>
          <Radio.Button value="default">Default</Radio.Button>
          <Radio.Button value="small">Small</Radio.Button>
        </Radio.Group>
        <br />
        <br />
        <DatePicker size={size} />
        <br />
        <DatePicker size={size} picker="month" />
        <br />
        <RangePicker size={size} />
        <br />
        <DatePicker size={size} picker="week" />
      </div>
    );
  }
}

export default () => (
  <div className={styles.container}>
    <div id="components-date-picker-demo-size">
      <PickerSizesDemo />
    </div>
  </div>
);
