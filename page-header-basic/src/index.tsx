import React from "react";
import { PageHeader } from "antd";

export default () => (
  <div className="container">
    <div id="components-page-header-demo-basic">
      <PageHeader
        style={{
          border: "1px solid rgb(235, 237, 240)"
        }}
        onBack={() => null}
        title="Title"
        subTitle="This is a subtitle"
      />
    </div>
  </div>
);
