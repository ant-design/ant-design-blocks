import React from "react";
import { Slider, Switch } from "antd";

class Demo extends React.Component {
  state = {
    reverse: true
  };

  handleReverseChange = reverse => {
    this.setState({ reverse });
  };

  render() {
    const { reverse } = this.state;
    return (
      <div>
        <Slider defaultValue={30} reverse={reverse} />
        <Slider range defaultValue={[20, 50]} reverse={reverse} />
        Reversed:{" "}
        <Switch
          size="small"
          checked={reverse}
          onChange={this.handleReverseChange}
        />
      </div>
    );
  }
}

export default () => (
  <div className="container">
    <div id="components-slider-demo-reverse">
      <Demo />
    </div>
  </div>
);
