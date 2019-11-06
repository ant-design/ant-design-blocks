import React from "react";
import styles from "./index.less";
import { TimePicker, Button } from "antd";

class TimePickerAddonDemo extends React.Component {
  state = { open: false };

  handleOpenChange = open => {
    this.setState({ open });
  };

  handleClose = () => this.setState({ open: false });

  render() {
    return (
      <TimePicker
        open={this.state.open}
        onOpenChange={this.handleOpenChange}
        addon={() => (
          <Button size="small" type="primary" onClick={this.handleClose}>
            Ok
          </Button>
        )}
      />
    );
  }
}

export default () => (
  <div className={styles.container}>
    <div id="components-time-picker-demo-addon">
      <TimePickerAddonDemo />
    </div>
  </div>
);
