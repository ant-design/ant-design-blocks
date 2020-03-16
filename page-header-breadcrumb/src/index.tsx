import React from "react";
import styles from "./index.less";
import { PageHeader } from "antd";

const routes = [
  {
    path: "index",
    breadcrumbName: "First-level Menu"
  },
  {
    path: "first",
    breadcrumbName: "Second-level Menu"
  },
  {
    path: "second",
    breadcrumbName: "Third-level Menu"
  }
];

export default () => (
  <div className={styles.container}>
    <div id="components-page-header-demo-breadcrumb">
      <PageHeader
        className="site-page-header"
        title="Title"
        breadcrumb={{ routes }}
        subTitle="This is a subtitle"
      />
    </div>
  </div>
);
