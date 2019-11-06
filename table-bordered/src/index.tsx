import React from "react";
import styles from "./index.less";
import { Table } from "antd";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    render: text => <a>{text}</a>
  },
  {
    title: "Cash Assets",
    className: "column-money",
    dataIndex: "money"
  },
  {
    title: "Address",
    dataIndex: "address"
  }
];

const data = [
  {
    key: "1",
    name: "John Brown",
    money: "￥300,000.00",
    address: "New York No. 1 Lake Park"
  },
  {
    key: "2",
    name: "Jim Green",
    money: "￥1,256,000.00",
    address: "London No. 1 Lake Park"
  },
  {
    key: "3",
    name: "Joe Black",
    money: "￥120,000.00",
    address: "Sidney No. 1 Lake Park"
  }
];

export default () => (
  <div className={styles.container}>
    <div id="components-table-demo-bordered">
      <Table
        columns={columns}
        dataSource={data}
        bordered
        title={() => "Header"}
        footer={() => "Footer"}
      />
    </div>
  </div>
);
