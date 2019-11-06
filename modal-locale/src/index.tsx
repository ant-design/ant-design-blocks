import React from "react";
import { Modal, Button } from "antd";

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
    content: "Bla bla ...",
    okText: "确认",
    cancelText: "取消"
  });
}

export default () => (
  <div className="container">
    <div id="components-modal-demo-locale">
      <div>
        <LocalizedModal />
        <br />
        <Button onClick={confirm}>Confirm</Button>
      </div>
    </div>
  </div>
);
