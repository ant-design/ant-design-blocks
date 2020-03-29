import React from "react";
import styles from "./index.less";
import { Modal, Button } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";

function destroyAll() {
  Modal.destroyAll();
}

const { confirm } = Modal;

function showConfirm() {
  for (let i = 0; i < 3; i += 1) {
    setTimeout(() => {
      confirm({
        icon: <ExclamationCircleOutlined />,
        content: <Button onClick={destroyAll}>Click to destroy all</Button>,
        onOk() {
          console.log("OK");
        },
        onCancel() {
          console.log("Cancel");
        }
      });
    }, i * 500);
  }
}

export default () => (
  <div className={styles.container}>
    <div id="components-modal-demo-confirm-router">
      <div>
        <Button onClick={showConfirm}>Confirm</Button>
      </div>
    </div>
  </div>
);
