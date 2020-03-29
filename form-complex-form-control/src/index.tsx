import React from "react";
import styles from "./index.less";
import { Form, Input, Select, Tooltip, Button } from "antd";

const { Option } = Select;

const Demo = () => {
  const onFinish = values => {
    console.log("Received values of form: ", values);
  };

  return (
    <Form
      name="complex-form"
      onFinish={onFinish}
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
    >
      <Form.Item label="Username">
        <Form.Item
          name="username"
          noStyle
          rules={[{ required: true, message: "Username is required" }]}
        >
          <Input style={{ width: 160 }} placeholder="Please input" />
        </Form.Item>
        <Tooltip title="Useful information">
          <a href="#API" style={{ marginLeft: 8 }}>
            Need Help?
          </a>
        </Tooltip>
      </Form.Item>
      <Form.Item label="Address">
        <Input.Group compact>
          <Form.Item
            name={["address", "province"]}
            noStyle
            rules={[{ required: true, message: "Province is required" }]}
          >
            <Select placeholder="Select province">
              <Option value="Zhejiang">Zhejiang</Option>
              <Option value="Jiangsu">Jiangsu</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name={["address", "street"]}
            noStyle
            rules={[{ required: true, message: "Street is required" }]}
          >
            <Input style={{ width: "50%" }} placeholder="Input street" />
          </Form.Item>
        </Input.Group>
      </Form.Item>
      <Form.Item label="BirthDate" style={{ marginBottom: 0 }}>
        <Form.Item
          name="year"
          rules={[{ required: true }]}
          style={{
            display: "inline-block",
            width: "calc(50% - 5px)",
            marginRight: 8
          }}
        >
          <Input placeholder="Input birth year" />
        </Form.Item>
        <Form.Item
          name="month"
          rules={[{ required: true }]}
          style={{ display: "inline-block", width: "calc(50% - 5px)" }}
        >
          <Input placeholder="Input birth month" />
        </Form.Item>
      </Form.Item>
      <Form.Item label=" " colon={false}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default () => (
  <div className={styles.container}>
    <div id="components-form-demo-complex-form-control">
      <Demo />
    </div>
  </div>
);
