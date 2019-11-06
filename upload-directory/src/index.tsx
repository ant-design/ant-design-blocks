import React from "react";
import styles from "./index.less";
import { Upload, Button, Icon } from "antd";

export default () => (
  <div className={styles.container}>
    <div id="components-upload-demo-directory">
      <Upload
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        directory
      >
        <Button>
          <Icon type="upload" /> Upload Directory
        </Button>
      </Upload>
    </div>
  </div>
);
