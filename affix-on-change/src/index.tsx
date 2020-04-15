import React from "react";
import { Affix, Button } from "antd";
import styles from "./index.less";

export default () => (
  <div className={styles.container}>
    <div id="components-affix-demo-on-change">
      <Affix offsetTop={120} onChange={(affixed) => console.log(affixed)}>
        <Button>120px to affix top</Button>
      </Affix>
    </div>
  </div>
);
