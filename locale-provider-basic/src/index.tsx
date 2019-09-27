import React from 'react';
import { Pagination, LocaleProvider } from 'antd';
import zhCN from 'antd/es/locale-provider/zh_CN';

const App = () => (
  <div>
    <Pagination defaultCurrent={1} total={50} showSizeChanger />
  </div>
);

export default () => 
  <LocaleProvider locale={zhCN}>
    <App />
  </LocaleProvider>;
