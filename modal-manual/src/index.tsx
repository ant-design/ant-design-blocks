import React from "react";
import styles from "./index.less";
import { Modal, Button } from "antd";

function countDown() {
  let secondsToGo = 5;
  const modal = Modal.success({
    title: "This is a notification message",
    content: `This modal will be destroyed after ${secondsToGo} second.`
  });
  const timer = setInterval(() => {
    secondsToGo -= 1;
    modal.update({
      content: `This modal will be destroyed after ${secondsToGo} second.`
    });
  }, 1000);
  setTimeout(() => {
    clearInterval(timer);
    modal.destroy();
  }, secondsToGo * 1000);
}

export default () => (
  <div className={styles.container}>
    <div id="components-modal-demo-manual">
      <Button onClick={countDown}>Open modal to close in 5s</Button>
    </div>
  </div>
);
