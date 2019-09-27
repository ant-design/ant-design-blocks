import React from 'react';
import { Timeline, Button } from 'antd';

class PendingTimeLine extends React.Component {
  state = {
    reverse: false,
  };

  handleClick = () => {
    this.setState({ reverse: !this.state.reverse });
  };

  render() {
    return (
      <div>
        <Timeline pending="Recording..." reverse={this.state.reverse}>
          <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
          <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
          <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
        </Timeline>
        <Button type="primary" style={{ marginTop: 16 }} onClick={this.handleClick}>
          Toggle Reverse
        </Button>
      </div>
    );
  }
}

export default () => <PendingTimeLine />;
