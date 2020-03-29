import React from "react";
import styles from "./index.less";
import React, { useState } from "react";
import { Affix, Button } from "antd";

const Demo: React.FC = () => {
  const [top, setTop] = useState(10);
  const [bottom, setBottom] = useState(10);

  return (
    <div>
      <Affix offsetTop={top}>
        <Button type="primary" onClick={() => setTop(top + 10)}>
          Affix top
        </Button>
      </Affix>
      <br />
      <Affix offsetBottom={bottom}>
        <Button type="primary" onClick={() => setBottom(bottom + 10)}>
          Affix bottom
        </Button>
      </Affix>
    </div>
  );
};

export default () => (
  <div className={styles.container}>
    <div id="components-affix-demo-basic">
      <Demo />
    </div>
  </div>
);
