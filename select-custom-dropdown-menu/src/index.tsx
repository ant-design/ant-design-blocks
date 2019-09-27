import React from 'react';
import { Select, Icon, Divider } from 'antd';

const { Option } = Select;

let index = 0;

class App extends React.Component {
  state = {
    items: ['jack', 'lucy'],
  };

  addItem = () => {
    console.log('addItem');
    const { items } = this.state;
    this.setState({
      items: [...items, `New item ${index++}`],
    });
  };

  render() {
    const { items } = this.state;
    return (
      <Select
        style={{ width: 240 }}
        placeholder="custom dropdown render"
        dropdownRender={menu => (
          <div>
            {menu}
            <Divider style={{ margin: '4px 0' }} />
            <div
              style={{ padding: '4px 8px', cursor: 'pointer' }}
              onMouseDown={e => e.preventDefault()}
              onClick={this.addItem}
            >
              <Icon type="plus" /> Add item
            </div>
          </div>
        )}
      >
        {items.map(item => (
          <Option key={item}>{item}</Option>
        ))}
      </Select>
    );
  }
}

export default () => <App />;
