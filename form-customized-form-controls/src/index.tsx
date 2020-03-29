import React from "react";
import styles from "./index.less";
import React, { useState } from "react";
import { Form, Input, Select, Button } from "antd";

const { Option } = Select;

interface PriceValue {
  number?: number;
  currency?: "rmb" | "dollar";
}

interface PriceInputProps {
  value?: PriceValue;
  onChange?: (value: PriceValue) => void;
}

const PriceInput: React.FC<PriceInputProps> = ({ value = {}, onChange }) => {
  const [number, setNumber] = useState(0);
  const [currency, setCurrency] = useState("rmb");

  const triggerChange = (changedValue) => {
    if (onChange) {
      onChange({ number, currency, ...value, ...changedValue });
    }
  };

  const onNumberChange = (e) => {
    const newNumber = parseInt(e.target.value || 0, 10);
    if (Number.isNaN(number)) {
      return;
    }
    if (!("number" in value)) {
      setNumber(newNumber);
    }
    triggerChange({ number: newNumber });
  };

  const onCurrencyChange = (newCurrency) => {
    if (!("currency" in value)) {
      setCurrency(newCurrency);
    }
    triggerChange({ currency: newCurrency });
  };

  return (
    <span>
      <Input
        type="text"
        value={value.number || number}
        onChange={onNumberChange}
        style={{ width: 100, marginRight: 8 }}
      />
      <Select
        value={value.currency || currency}
        style={{ width: 80 }}
        onChange={onCurrencyChange}
      >
        <Option value="rmb">RMB</Option>
        <Option value="dollar">Dollar</Option>
      </Select>
    </span>
  );
};

const Demo = () => {
  const onFinish = (values) => {
    console.log("Received values from form: ", values);
  };

  const checkPrice = (rule, value) => {
    if (value.number > 0) {
      return Promise.resolve();
    }
    return Promise.reject("Price must be greater than zero!");
  };

  return (
    <Form
      name="customized_form_controls"
      layout="inline"
      onFinish={onFinish}
      initialValues={{
        price: {
          number: 0,
          currency: "rmb",
        },
      }}
    >
      <Form.Item name="price" label="Price" rules={[{ validator: checkPrice }]}>
        <PriceInput />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default () => (
  <div className={styles.container}>
    <div id="components-form-demo-customized-form-controls">
      <Demo />
    </div>
  </div>
);
