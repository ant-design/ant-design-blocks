import React from "react";
import styles from "./index.less";
import { BackTop } from "antd";

export default () => (
  <div className={styles.container}>
    <div id="components-back-top-demo-basic">
      <div>
        <BackTop />
        Scroll down to see the bottom-right
        <strong className="site-back-top-basic"> gray </strong>
        button.
      </div>
    </div>
  </div>
);
