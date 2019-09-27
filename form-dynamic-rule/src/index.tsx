import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';

const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8 },
};
const formTailLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8, offset: 4 },
};
class DynamicRule extends React.Component {
  state = {
    checkNick: false,
  };

  check = () => {
    this.props.form.validateFields(err => {
      if (!err) {
        console.info('success');
      }
    });
  };

  handleChange = e => {
    this.setState(
      {
        checkNick: e.target.checked,
      },
      () => {
        this.props.form.validateFields(['nickname'], { force: true });
      },
    );
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <Form.Item {...formItemLayout} label="Name">
          {getFieldDecorator('username', {
            rules: [
              {
                required: true,
                message: 'Please input your name',
              },
            ],
          })(<Input placeholder="Please input your name" />)}
        </Form.Item>
        <Form.Item {...formItemLayout} label="Nickname">
          {getFieldDecorator('nickname', {
            rules: [
              {
                required: this.state.checkNick,
                message: 'Please input your nickname',
              },
            ],
          })(<Input placeholder="Please input your nickname" />)}
        </Form.Item>
        <Form.Item {...formTailLayout}>
          <Checkbox checked={this.state.checkNick} onChange={this.handleChange}>
            Nickname is required
          </Checkbox>
        </Form.Item>
        <Form.Item {...formTailLayout}>
          <Button type="primary" onClick={this.check}>
            Check
          </Button>
        </Form.Item>
      </div>
    );
  }
}

const WrappedDynamicRule = Form.create({ name: 'dynamic_rule' })(DynamicRule);
export default () => <WrappedDynamicRule />;
