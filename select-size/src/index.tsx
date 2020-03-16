import React from "react";
import styles from "./index.less";
import { Select, Radio } from "antd";

const { Option } = Select;

const children = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

function handleChange(value) {
  console.log(`Selected: ${value}`);
}

class SelectSizesDemo extends React.Component {
  state = {
    size: "default"
  };

  handleSizeChange = e => {
    this.setState({ size: e.target.value });
  };

  render() {
    const { size } = this.state;
    return (
      <>
        <Radio.Group value={size} onChange={this.handleSizeChange}>
          <Radio.Button value="large">Large</Radio.Button>
          <Radio.Button value="default">Default</Radio.Button>
          <Radio.Button value="small">Small</Radio.Button>
        </Radio.Group>
        <br />
        <br />
        <Select
          size={size}
          defaultValue="a1"
          onChange={handleChange}
          style={{ width: 200 }}
        >
          {children}
        </Select>
        <br />
        <Select
          mode="multiple"
          size={size}
          placeholder="Please select"
          defaultValue={["a10", "c12"]}
          onChange={handleChange}
          style={{ width: "100%" }}
        >
          {children}
        </Select>
        <br />
        <Select
          mode="tags"
          size={size}
          placeholder="Please select"
          defaultValue={["a10", "c12"]}
          onChange={handleChange}
          style={{ width: "100%" }}
        >
          {children}
        </Select>
      </>
    );
  }
}

export default () => (
  <div className={styles.container}>
    <div id="components-select-demo-size">
      <SelectSizesDemo />
    </div>
  </div>
);
