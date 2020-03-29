import React from "react";
import styles from "./index.less";
import React, { useState, useEffect, useRef } from "react";
import {
  Form,
  Input,
  InputNumber,
  Modal,
  Button,
  Avatar,
  Typography,
} from "antd";
import { SmileOutlined, UserOutlined } from "@ant-design/icons";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

interface ModalFormProps {
  visible: boolean;
  onCancel: () => void;
}

const ModalForm: React.FC<ModalFormProps> = ({ visible, onCancel }) => {
  const [form] = Form.useForm();

  const prevVisibleRef = useRef();
  useEffect(() => {
    prevVisibleRef.current = visible;
  }, [visible]);
  const prevVisible = prevVisibleRef.current;

  useEffect(() => {
    console.log(visible, prevVisible);
    if (!visible && prevVisible) {
      form.resetFields();
    }
  }, [visible]);

  const onOk = () => {
    form.submit();
  };

  return (
    <Modal
      title="Basic Drawer"
      visible={visible}
      onOk={onOk}
      onCancel={onCancel}
    >
      <Form form={form} layout="vertical" name="userForm">
        <Form.Item name="name" label="User Name" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="age" label="User Age" rules={[{ required: true }]}>
          <InputNumber />
        </Form.Item>
      </Form>
    </Modal>
  );
};

const Demo = () => {
  const [visible, setVisible] = useState(false);

  const showUserModal = () => {
    setVisible(true);
  };

  const hideUserModal = () => {
    setVisible(false);
  };

  const onFinish = (values) => {
    console.log("Finish:", values);
  };

  return (
    <div>
      <Form.Provider
        onFormFinish={(name, { values, forms }) => {
          if (name === "userForm") {
            const { basicForm } = forms;
            const users = basicForm.getFieldValue("users") || [];
            basicForm.setFieldsValue({ users: [...users, values] });
            setVisible(false);
          }
        }}
      >
        <Form {...layout} name="basicForm" onFinish={onFinish}>
          <Form.Item
            name="group"
            label="Group Name"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="User List"
            shouldUpdate={(prevValues, curValues) =>
              prevValues.users !== curValues.users
            }
          >
            {({ getFieldValue }) => {
              const users = getFieldValue("users") || [];
              return users.length ? (
                <ul>
                  {users.map((user, index) => (
                    <li key={index} className="user">
                      <Avatar icon={<UserOutlined />} />
                      {user.name} - {user.age}
                    </li>
                  ))}
                </ul>
              ) : (
                <Typography.Text className="ant-form-text" type="secondary">
                  ( <SmileOutlined /> No user yet. )
                </Typography.Text>
              );
            }}
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Button htmlType="submit" type="primary">
              Submit
            </Button>
            <Button
              htmlType="button"
              style={{ marginLeft: 8 }}
              onClick={showUserModal}
            >
              Add User
            </Button>
          </Form.Item>
        </Form>

        <ModalForm visible={visible} onCancel={hideUserModal} />
      </Form.Provider>
    </div>
  );
};

export default () => (
  <div className={styles.container}>
    <div id="components-form-demo-form-context">
      <Demo />
    </div>
  </div>
);
