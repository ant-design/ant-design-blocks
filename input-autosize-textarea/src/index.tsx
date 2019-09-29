import React from 'react';
import { Input } from 'antd';

const { TextArea } = Input;

class Demo extends React.Component {
  state = {
    value: '',
  };

  onChange = ({ target: { value } }) => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;

    return (
      <div>
        <TextArea placeholder="Autosize height based on content lines" autosize />
        <div style={{ margin: '24px 0' }} />
        <TextArea
          placeholder="Autosize height with minimum and maximum number of lines"
          autosize={{ minRows: 2, maxRows: 6 }}
        />
        <div style={{ margin: '24px 0' }} />
        <TextArea
          value={value}
          onChange={this.onChange}
          placeholder="Controlled autosize"
          autosize={{ minRows: 3, maxRows: 5 }}
        />
      </div>
    );
  }
}

export default () => <div id="components-input-demo-autosize-textarea"><Demo /></div>;
