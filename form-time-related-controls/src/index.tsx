import React from "react";
import { Form, DatePicker, TimePicker, Button } from "antd";

const { MonthPicker, RangePicker } = DatePicker;

class TimeRelatedForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();

    this.props.form.validateFields((err, fieldsValue) => {
      if (err) {
        return;
      }

      // Should format date value before submit.
      const rangeValue = fieldsValue["range-picker"];
      const rangeTimeValue = fieldsValue["range-time-picker"];
      const values = {
        ...fieldsValue,
        "date-picker": fieldsValue["date-picker"].format("YYYY-MM-DD"),
        "date-time-picker": fieldsValue["date-time-picker"].format(
          "YYYY-MM-DD HH:mm:ss"
        ),
        "month-picker": fieldsValue["month-picker"].format("YYYY-MM"),
        "range-picker": [
          rangeValue[0].format("YYYY-MM-DD"),
          rangeValue[1].format("YYYY-MM-DD")
        ],
        "range-time-picker": [
          rangeTimeValue[0].format("YYYY-MM-DD HH:mm:ss"),
          rangeTimeValue[1].format("YYYY-MM-DD HH:mm:ss")
        ],
        "time-picker": fieldsValue["time-picker"].format("HH:mm:ss")
      };
      console.log("Received values of form: ", values);
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 }
      }
    };
    const config = {
      rules: [
        { type: "object", required: true, message: "Please select time!" }
      ]
    };
    const rangeConfig = {
      rules: [{ type: "array", required: true, message: "Please select time!" }]
    };
    return (
      <Form {...formItemLayout} onSubmit={this.handleSubmit}>
        <Form.Item label="DatePicker">
          {getFieldDecorator("date-picker", config)(<DatePicker />)}
        </Form.Item>
        <Form.Item label="DatePicker[showTime]">
          {getFieldDecorator("date-time-picker", config)(
            <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" />
          )}
        </Form.Item>
        <Form.Item label="MonthPicker">
          {getFieldDecorator("month-picker", config)(<MonthPicker />)}
        </Form.Item>
        <Form.Item label="RangePicker">
          {getFieldDecorator("range-picker", rangeConfig)(<RangePicker />)}
        </Form.Item>
        <Form.Item label="RangePicker[showTime]">
          {getFieldDecorator("range-time-picker", rangeConfig)(
            <RangePicker showTime format="YYYY-MM-DD HH:mm:ss" />
          )}
        </Form.Item>
        <Form.Item label="TimePicker">
          {getFieldDecorator("time-picker", config)(<TimePicker />)}
        </Form.Item>
        <Form.Item
          wrapperCol={{
            xs: { span: 24, offset: 0 },
            sm: { span: 16, offset: 8 }
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

const WrappedTimeRelatedForm = Form.create({ name: "time_related_controls" })(
  TimeRelatedForm
);

export default () => (
  <div className="container">
    <div id="components-form-demo-time-related-controls">
      <WrappedTimeRelatedForm />
    </div>
  </div>
);
