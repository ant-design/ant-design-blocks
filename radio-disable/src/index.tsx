import React from "react";
import { Radio, Button } from "antd";

class App extends React.Component {
  state = {
    disabled: true
  };

  toggleDisabled = () => {
    this.setState({
      disabled: !this.state.disabled
    });
  };

  render() {
    return (
      <div>
        <Radio defaultChecked={false} disabled={this.state.disabled}>
          Disabled
        </Radio>
        <br />
        <Radio defaultChecked disabled={this.state.disabled}>
          Disabled
        </Radio>
        <div style={{ marginTop: 20 }}>
          <Button type="primary" onClick={this.toggleDisabled}>
            Toggle disabled
          </Button>
        </div>
      </div>
    );
  }
}

export default () => (
  <div className="container">
    <div id="components-radio-demo-disable">
      <App />
    </div>
  </div>
);
