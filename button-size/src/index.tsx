import React from "react";
import styles from "./index.less";
import { Button, Radio } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import { SizeType } from 'antd/es/config-provider/SizeContext';
import { RadioChangeEvent } from 'antd/es/radio';

class ButtonSize extends React.Component {
  state = {
    size: "large" as SizeType
  };

  handleSizeChange = (e: RadioChangeEvent) => {
    this.setState({ size: e.target.value });
  };

  render() {
    const { size } = this.state;
    return (
      <div>
        <Radio.Group value={size} onChange={this.handleSizeChange}>
          <Radio.Button value="large">Large</Radio.Button>
          <Radio.Button value="default">Default</Radio.Button>
          <Radio.Button value="small">Small</Radio.Button>
        </Radio.Group>
        <br />
        <br />
        <Button type="primary" size={size}>
          Primary
        </Button>
        <Button size={size}>Default</Button>
        <Button type="dashed" size={size}>
          Dashed
        </Button>
        <br />
        <Button type="link" size={size}>
          Link
        </Button>
        <br />
        <Button type="primary" icon={<DownloadOutlined />} size={size} />
        <Button
          type="primary"
          shape="circle"
          icon={<DownloadOutlined />}
          size={size}
        />
        <Button
          type="primary"
          shape="round"
          icon={<DownloadOutlined />}
          size={size}
        />
        <Button
          type="primary"
          shape="round"
          icon={<DownloadOutlined />}
          size={size}
        >
          Download
        </Button>
        <Button type="primary" icon={<DownloadOutlined />} size={size}>
          Download
        </Button>
      </div>
    );
  }
}

export default () => (
  <div className={styles.container}>
    <div id="components-button-demo-size">
      <ButtonSize />
    </div>
  </div>
);
