import React from "react";
import styles from "./index.less";
import { Icon } from "antd";

const IconFont = Icon.createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js"
});

export default () => (
  <div className={styles.container}>
    <div id="components-icon-demo-iconfont">
      <div className="icons-list">
        <IconFont type="icon-tuichu" />
        <IconFont type="icon-facebook" />
        <IconFont type="icon-twitter" />
      </div>
    </div>
  </div>
);
