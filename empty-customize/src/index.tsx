import React from "react";
import styles from "./index.less";
import { Empty, Button } from "antd";

export default () => (
  <div className={styles.container}>
    <div id="components-empty-demo-customize">
      <Empty
        image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
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
