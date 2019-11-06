import React from "react";
import { Popconfirm, message } from "antd";

function confirm(e) {
  console.log(e);
  message.success("Click on Yes");
}

function cancel(e) {
  console.log(e);
  message.error("Click on No");
}

export default () => (
  <div className="container">
    <div id="components-popconfirm-demo-basic">
      <Popconfirm
        title="Are you sure delete this task?"
        onConfirm={confirm}
        onCancel={cancel}
        okText="Yes"
        cancelText="No"
      >
        <a href="#">Delete</a>
      </Popconfirm>
    </div>
  </div>
);
