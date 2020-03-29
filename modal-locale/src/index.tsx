import React from "react";
import styles from "./index.less";
import { Modal, Button } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";

class LocalizedModal extends React.Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  hideModal = () => {
    this.setState({
      visible: false
    });
  };

  render() {
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
          Modal
        </Button>
        <Modal
          title="Modal"
          visible={this.state.visible}
          onOk={this.hideModal}
          onCancel={this.hideModal}
          okText="确认"
          cancelText="取消"
        >
          <p>Bla bla ...</p>
          <p>Bla bla ...</p>
          <p>Bla bla ...</p>
        </Modal>
      </div>
    );
  }
}

function confirm() {
  Modal.confirm({
    title: "Confirm",
    icon: <ExclamationCircleOutlined />,
    content: "Bla bla ...",
    okText: "确认",
    cancelText: "取消"
  });
}

export default () => (
  <div className={styles.container}>
    <div id="components-modal-demo-locale">
      <div>
        <LocalizedModal />
        <br />
        <Button onClick={confirm}>Confirm</Button>
      </div>
    </div>
  </div>
);
