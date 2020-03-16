import React from "react";
import styles from "./index.less";
import { Upload, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";

const fileList = [
  {
    uid: "-1",
    name: "xxx.png",
    status: "done",
    url:
      "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    thumbUrl:
      "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
  },
  {
    uid: "-2",
    name: "yyy.png",
    status: "error"
  }
];

const props = {
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  listType: "picture",
  defaultFileList: [...fileList]
};

const props2 = {
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  listType: "picture",
  defaultFileList: [...fileList],
  className: "upload-list-inline"
};

export default () => (
  <div className={styles.container}>
    <div id="components-upload-demo-picture-style">
      <div>
        <Upload {...props}>
          <Button>
            <UploadOutlined /> Upload
          </Button>
        </Upload>
        <br />
        <br />
        <Upload {...props2}>
          <Button>
            <UploadOutlined /> Upload
          </Button>
        </Upload>
      </div>
    </div>
  </div>
);
