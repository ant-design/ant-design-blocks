import React from 'react';
import { Alert } from 'antd';

class App extends React.Component {
  state = {
    visible: true,
  };

  handleClose = () => {
    this.setState({ visible: false });
  };

  render() {
    return (
      <div>
        {this.state.visible ? (
          <Alert
            message="Alert Message Text"
            type="success"
            closable
            afterClose={this.handleClose}
          />
        ) : null}
        <p>placeholder text here</p>
      </div>
    );
  }
}

export default () => <App />;
