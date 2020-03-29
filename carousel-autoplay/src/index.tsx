import React from "react";
import styles from "./index.less";
import { Carousel } from "antd";

export default () => (
  <div className={styles.container}>
    <div id="components-carousel-demo-autoplay">
      <Carousel autoplay>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
      </Carousel>
    </div>
  </div>
);
