import React from "react";
import styles from "./index.less";
import { Calendar, Alert } from "antd";
import moment from "moment";

class App extends React.Component {
  state = {
    value: moment("2017-01-25"),
    selectedValue: moment("2017-01-25")
  };

  onSelect = value => {
    this.setState({
      value,
      selectedValue: value
    });
  };

  onPanelChange = value => {
    this.setState({ value });
  };

  render() {
    const { value, selectedValue } = this.state;
    return (
      <div>
        <Alert
          message={`You selected date: ${selectedValue &&
            selectedValue.format("YYYY-MM-DD")}`}
        />
        <Calendar
          value={value}
          onSelect={this.onSelect}
          onPanelChange={this.onPanelChange}
        />
      </div>
    );
  }
}

export default () => (
  <div className={styles.container}>
    <div id="components-calendar-demo-select">
      <App />
    </div>
  </div>
);
