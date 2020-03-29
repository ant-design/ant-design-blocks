import React from "react";
import styles from "./index.less";
import { Table, Typography } from "antd";

const { Text } = Typography;

const columns = [
  {
    title: "Name",
    dataIndex: "name"
  },
  {
    title: "Borrow",
    dataIndex: "borrow"
  },
  {
    title: "Repayment",
    dataIndex: "repayment"
  }
];

const data = [
  {
    key: "1",
    name: "John Brown",
    borrow: 10,
    repayment: 33
  },
  {
    key: "2",
    name: "Jim Green",
    borrow: 100,
    repayment: 0
  },
  {
    key: "3",
    name: "Joe Black",
    borrow: 10,
    repayment: 10
  },
  {
    key: "4",
    name: "Jim Red",
    borrow: 75,
    repayment: 45
  }
];

export default () => (
  <div className={styles.container}>
    <div id="components-table-demo-summary">
      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
        bordered
        summary={pageData => {
          let totalBorrow = 0;
          let totalRepayment = 0;

          pageData.forEach(({ borrow, repayment }) => {
            totalBorrow += borrow;
            totalRepayment += repayment;
          });

          return (
            <>
              <tr>
                <th>Total</th>
                <td>
                  <Text type="danger">{totalBorrow}</Text>
                </td>
                <td>
                  <Text>{totalRepayment}</Text>
                </td>
              </tr>
              <tr>
                <th>Balance</th>
                <td colSpan={2}>
                  <Text type="danger">{totalBorrow - totalRepayment}</Text>
                </td>
              </tr>
            </>
          );
        }}
      />
    </div>
  </div>
);
