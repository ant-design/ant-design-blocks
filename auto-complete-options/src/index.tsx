import React, { useState } from 'react';
import { AutoComplete } from 'antd';
import styles from './index.less';

const { Option } = AutoComplete;

const Complete: React.FC = () => {
  const [result, setResult] = useState<string[]>([]);
  const handleSearch = (value: string) => {
    let res: string[] = [];
    if (!value || value.indexOf('@') >= 0) {
      res = [];
    } else {
      res = ['gmail.com', '163.com', 'qq.com'].map(domain => `${value}@${domain}`);
    }
    setResult(res);
  };
  const children = result.map((email: string) => (
    <Option key={email} value={email}>
      {email}
    </Option>
  ));
  return (
    <AutoComplete style={{ width: 200 }} onSearch={handleSearch} placeholder="input here">
      {children}
    </AutoComplete>
  );
};

export default () => <div className={styles.container}><div id="components-auto-complete-demo-options"><Complete /></div></div>;
