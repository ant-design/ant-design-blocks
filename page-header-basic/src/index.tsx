import React from "react";
import styles from "./index.less";
import { PageHeader } from "antd";

export default () => (
  <div className={styles.container}>
    <div id="components-page-header-demo-basic">
      <PageHeader
        className="site-page-header"
        onBack={() => null}
        title="Title"
        subTitle="This is a subtitle"
      />
    </div>
  </div>
);
