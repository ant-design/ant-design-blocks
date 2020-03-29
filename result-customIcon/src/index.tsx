import React from "react";
import styles from "./index.less";
import { Result, Button } from "antd";
import { SmileOutlined } from "@ant-design/icons";

export default () => (
  <div className={styles.container}>
    <div id="components-result-demo-customIcon">
      <Result
        icon={<SmileOutlined />}
        title="Great, we have done all the operations!"
        extra={<Button type="primary">Next</Button>}
      />
    </div>
  </div>
);
