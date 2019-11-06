import React from "react";
import { Select } from "antd";

const OPTIONS = ["Apples", "Nails", "Bananas", "Helicopters"];

class SelectWithHiddenSelectedOptions extends React.Component {
  state = {
    selectedItems: []
  };

  handleChange = selectedItems => {
    this.setState({ selectedItems });
  };

  render() {
    const { selectedItems } = this.state;
    const filteredOptions = OPTIONS.filter(o => !selectedItems.includes(o));
    return (
      <Select
        mode="multiple"
        placeholder="Inserted are removed"
        value={selectedItems}
        onChange={this.handleChange}
        style={{ width: "100%" }}
      >
        {filteredOptions.map(item => (
          <Select.Option key={item} value={item}>
            {item}
          </Select.Option>
        ))}
      </Select>
    );
  }
}

export default () => (
  <div className="container">
    <div id="components-select-demo-hide-selected">
      <SelectWithHiddenSelectedOptions />
    </div>
  </div>
);
