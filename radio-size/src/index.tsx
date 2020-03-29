import React from "react";
import styles from "./index.less";
import { Radio } from "antd";

export default () => (
  <div className={styles.container}>
    <div id="components-radio-demo-size">
      <div>
        <div>
          <Radio.Group defaultValue="a" size="large">
            <Radio.Button value="a">Hangzhou</Radio.Button>
            <Radio.Button value="b">Shanghai</Radio.Button>
            <Radio.Button value="c">Beijing</Radio.Button>
            <Radio.Button value="d">Chengdu</Radio.Button>
          </Radio.Group>
        </div>
        <div style={{ marginTop: 16 }}>
          <Radio.Group defaultValue="a">
            <Radio.Button value="a">Hangzhou</Radio.Button>
            <Radio.Button value="b">Shanghai</Radio.Button>
            <Radio.Button value="c">Beijing</Radio.Button>
            <Radio.Button value="d">Chengdu</Radio.Button>
          </Radio.Group>
        </div>
        <div style={{ marginTop: 16 }}>
          <Radio.Group defaultValue="a" size="small">
            <Radio.Button value="a">Hangzhou</Radio.Button>
            <Radio.Button value="b">Shanghai</Radio.Button>
            <Radio.Button value="c">Beijing</Radio.Button>
            <Radio.Button value="d">Chengdu</Radio.Button>
          </Radio.Group>
        </div>
      </div>
    </div>
  </div>
);
