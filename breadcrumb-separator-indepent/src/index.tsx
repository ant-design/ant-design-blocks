import React from "react";
import styles from "./index.less";
import { Breadcrumb } from "antd";

export default () => (
  <div className={styles.container}>
    <div id="components-breadcrumb-demo-separator-indepent">
      <Breadcrumb separator="">
        <Breadcrumb.Item>Location</Breadcrumb.Item>
        <Breadcrumb.Separator>:</Breadcrumb.Separator>
        <Breadcrumb.Item href="">Application Center</Breadcrumb.Item>
        <Breadcrumb.Separator />
        <Breadcrumb.Item href="">Application List</Breadcrumb.Item>
        <Breadcrumb.Separator />
        <Breadcrumb.Item>An Application</Breadcrumb.Item>
      </Breadcrumb>
    </div>
  </div>
);
