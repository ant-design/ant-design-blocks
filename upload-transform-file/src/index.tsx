import React from "react";
import { Upload, Button, Icon } from "antd";

const props = {
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  transformFile(file) {
    return new Promise(resolve => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const canvas = document.createElement("canvas");
        const img = document.createElement("img");
        img.src = reader.result;
        img.onload = () => {
          const ctx = canvas.getContext("2d");
          ctx.drawImage(img, 0, 0);
          ctx.fillStyle = "red";
          ctx.textBaseline = "middle";
          ctx.fillText("Ant Design", 20, 20);
          canvas.toBlob(resolve);
        };
      };
    });
  }
};

export default () => (
  <div className="container">
    <div id="components-upload-demo-transform-file">
      <div>
        <Upload {...props}>
          <Button>
            <Icon type="upload" /> Upload
          </Button>
        </Upload>
      </div>
    </div>
  </div>
);
