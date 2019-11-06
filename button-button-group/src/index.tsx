import React from "react";
import { Button, Icon } from "antd";

const ButtonGroup = Button.Group;

export default () => (
  <div className="container">
    <div id="components-button-demo-button-group">
      <div>
        <h4>Basic</h4>
        <ButtonGroup>
          <Button>Cancel</Button>
          <Button>OK</Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button disabled>L</Button>
          <Button disabled>M</Button>
          <Button disabled>R</Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button>L</Button>
          <Button>M</Button>
          <Button>R</Button>
        </ButtonGroup>

        <h4>With Icon</h4>
        <ButtonGroup>
          <Button type="primary">
            <Icon type="left" />
            Go back
          </Button>
          <Button type="primary">
            Go forward
            <Icon type="right" />
          </Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button type="primary" icon="cloud" />
          <Button type="primary" icon="cloud-download" />
        </ButtonGroup>
        <ButtonGroup>
          <Button type="primary" size="small" icon="cloud" />
          <Button type="primary" size="small" icon="cloud-download" />
        </ButtonGroup>
      </div>
    </div>
  </div>
);
