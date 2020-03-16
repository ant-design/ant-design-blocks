import React from "react";
import styles from "./index.less";
import {
  ConfigProvider,
  Switch,
  Divider,
  TreeSelect,
  Select,
  Cascader,
  Transfer,
  Table,
  List
} from "antd";
import { SmileOutlined } from "@ant-design/icons";

const customizeRenderEmpty = () => (
  <div style={{ textAlign: "center" }}>
    <SmileOutlined style={{ fontSize: 20 }} />
    <p>Data Not Found</p>
  </div>
);

const style = { width: 200 };

class Demo extends React.Component {
  state = {
    customize: false
  };

  render() {
    const { customize } = this.state;
    return (
      <div>
        <Switch
          unCheckedChildren="default"
          checkedChildren="customize"
          checked={customize}
          onChange={val => {
            this.setState({ customize: val });
          }}
        />

        <Divider />

        <ConfigProvider renderEmpty={customize && customizeRenderEmpty}>
          <div className="config-provider">
            <h3>Select</h3>
            <Select style={style} />

            <h3>TreeSelect</h3>
            <TreeSelect style={style} treeData={[]} />

            <h3>Cascader</h3>
            <Cascader style={style} options={[]} showSearch />

            <h3>Transfer</h3>
            <Transfer />

            <h3>Table</h3>
            <Table
              style={{ marginTop: 8 }}
              columns={[
                {
                  title: "Name",
                  dataIndex: "name",
                  key: "name"
                },
                {
                  title: "Age",
                  dataIndex: "age",
                  key: "age"
                }
              ]}
            />

            <h3>List</h3>
            <List />
          </div>
        </ConfigProvider>
      </div>
    );
  }
}

export default () => (
  <div className={styles.container}>
    <div id="components-empty-demo-config-provider">
      <Demo />
    </div>
  </div>
);
