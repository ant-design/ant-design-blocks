import React from "react";
import styles from "./index.less";
import React, { useState } from "react";
import { Form, Input } from "antd";

interface FieldData {
  name: string[];
  value: any;
  touched: boolean;
  validating: boolean;
  errors: string[];
}

interface CustomizedFormProps {
  onChange: (fields: FieldData[]) => void;
  fields: FieldData[];
}

const CustomizedForm: React.FC<CustomizedFormProps> = ({
  onChange,
  fields,
}) => {
  return (
    <Form
      name="global_state"
      layout="inline"
      fields={fields}
      onFieldsChange={(changedFields, allFields) => {
        onChange(allFields);
      }}
    >
      <Form.Item
        name="username"
        label="Username"
        rules={[{ required: true, message: "Username is required!" }]}
      >
        <Input />
      </Form.Item>
    </Form>
  );
};

const Demo = () => {
  const [fields, setFields] = useState([
    { name: ["username"], value: "Ant Design" },
  ]);

  return (
    <div>
      <CustomizedForm
        fields={fields}
        onChange={(newFields) => {
          setFields(newFields);
        }}
      />
      <pre className="language-bash">{JSON.stringify(fields, null, 2)}</pre>
    </div>
  );
};

export default () => (
  <div className={styles.container}>
    <div id="components-form-demo-global-state">
      <Demo />
    </div>
  </div>
);
