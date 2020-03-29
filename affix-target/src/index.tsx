import React from "react";
import styles from "./index.less";
import React, { useState } from "react";
import { Affix, Button } from "antd";

const Demo: React.FC = () => {
  const [container, setContainer] = useState(null);
  return (
    <div className="scrollable-container" ref={setContainer}>
      <div className="background">
        <Affix target={() => container}>
          <Button type="primary">Fixed at the top of container</Button>
        </Affix>
      </div>
    </div>
  );
};

export default () => (
  <div className={styles.container}>
    <div id="components-affix-demo-target">
      <Demo />
    </div>
  </div>
);
