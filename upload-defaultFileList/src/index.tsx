import React from "react";
import styles from "./index.less";
import { Upload, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";

const props = {
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  onChange({ file, fileList }) {
    if (file.status !== "uploading") {
      console.log(file, fileList);
    }
  },
  defaultFileList: [
    {
      uid: "1",
      name: "xxx.png",
      status: "done",
      response: "Server Error 500", // custom error message to show
      url: "http://www.baidu.com/xxx.png"
    },
    {
      uid: "2",
      name: "yyy.png",
      status: "done",
      url: "http://www.baidu.com/yyy.png"
    },
    {
      uid: "3",
      name: "zzz.png",
      status: "error",
      response: "Server Error 500", // custom error message to show
      url: "http://www.baidu.com/zzz.png"
    }
  ]
};

export default () => (
  <div className={styles.container}>
    <div id="components-upload-demo-defaultFileList">
      <Upload {...props}>
        <Button>
          <UploadOutlined /> Upload
        </Button>
      </Upload>
    </div>
  </div>
);
