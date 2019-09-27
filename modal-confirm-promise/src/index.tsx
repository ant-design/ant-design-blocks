import React from 'react';
import { Modal, Button } from 'antd';

const { confirm } = Modal;

function showConfirm() {
  confirm({
    title: 'Do you want to delete these items?',
    content: 'When clicked the OK button, this dialog will be closed after 1 second',
    onOk() {
      return new Promise((resolve, reject) => {
        setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
      }).catch(() => console.log('Oops errors!'));
    },
    onCancel() {},
  });
}

export default () => <Button onClick={showConfirm}>Confirm</Button>;
