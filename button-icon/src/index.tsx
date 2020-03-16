import React from "react";
import styles from "./index.less";
import { Button, Tooltip } from "antd";
import { SearchOutlined } from "@ant-design/icons";

export default () => (
  <div className={styles.container}>
    <div id="components-button-demo-icon">
      <div>
        <Tooltip title="search">
          <Button type="primary" shape="circle" icon={<SearchOutlined />} />
        </Tooltip>
        <Button type="primary" shape="circle">
          A
        </Button>
        <Button type="primary" icon={<SearchOutlined />}>
          Search
        </Button>
        <Tooltip title="search">
          <Button shape="circle" icon={<SearchOutlined />} />
        </Tooltip>
        <Button icon={<SearchOutlined />}>Search</Button>
        <br />
        <Tooltip title="search">
          <Button shape="circle" icon={<SearchOutlined />} />
        </Tooltip>
        <Button icon={<SearchOutlined />}>Search</Button>
        <Tooltip title="search">
          <Button type="dashed" shape="circle" icon={<SearchOutlined />} />
        </Tooltip>
        <Button type="dashed" icon={<SearchOutlined />}>
          Search
        </Button>
      </div>
    </div>
  </div>
);
