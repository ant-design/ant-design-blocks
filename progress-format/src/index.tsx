import React from "react";
import styles from "./index.less";
import { Progress } from "antd";

export default () => (
  <div className={styles.container}>
    <div id="components-progress-demo-format">
      <div>
        <Progress
          type="circle"
          percent={75}
          format={percent => `${percent} Days`}
        />
        <Progress type="circle" percent={100} format={() => "Done"} />
      </div>
    </div>
  </div>
);
