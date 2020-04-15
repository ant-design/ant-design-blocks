import React, { useState } from 'react';
import { AutoComplete } from 'antd';
import styles from './index.less';

const mockVal = (str: string, repeat: number = 1) => {
  return {
    value: str.repeat(repeat),
  };
};
const Complete: React.FC = () => {
  const [value, setValue] = useState('');
  const [options, setOptions] = useState<{ value: string }[]>([]);
  const onSearch = (searchText: string) => {
    setOptions(
      !searchText ? [] : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)],
    );
  };
  const onSelect = (data: string) => {
    console.log('onSelect', data);
  };
  const onChange = (data: string) => {
    setValue(data);
  };
  return (
    <div>
      <AutoComplete
        options={options}
        style={{ width: 200 }}
        onSelect={onSelect}
        onSearch={onSearch}
        placeholder="input here"
      />
      <br />
      <br />
      <AutoComplete
        value={value}
        options={options}
        style={{ width: 200 }}
        onSelect={onSelect}
        onSearch={onSearch}
        onChange={onChange}
        placeholder="control mode"
      />
    </div>
  );
};

export default () => <div className={styles.container}><div id="components-auto-complete-demo-basic"><Complete /></div></div>;
