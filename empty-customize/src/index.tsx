import React from "react";
import styles from "./index.less";
import { Empty, Button } from "antd";

export default () => (
  <div className={styles.container}>
    <div id="components-empty-demo-customize">
      <Empty
        image="https://gw.alipayobjects.com/mdn/miniapp_social/afts/img/A*pevERLJC9v0AAAAAAAAAAABjAQAAAQ/original"
        imageStyle={{
          height: 60
        }}
        description={
          <span>
            Customize <a href="#API">Description</a>
          </span>
        }
      >
        <Button type="primary">Create Now</Button>
      </Empty>
    </div>
  </div>
);
