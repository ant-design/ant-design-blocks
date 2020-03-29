import React from "react";
import styles from "./index.less";
import { Button } from "antd";

export default () => (
  <div className={styles.container}>
    <div id="components-button-demo-disabled">
      <div>
        <Button type="primary">Primary</Button>
        <Button type="primary" disabled>
          Primary(disabled)
        </Button>
        <br />
        <Button>Default</Button>
        <Button disabled>Default(disabled)</Button>
        <br />
        <Button type="dashed">Dashed</Button>
        <Button type="dashed" disabled>
          Dashed(disabled)
        </Button>
        <br />
        <Button type="link">Link</Button>
        <Button type="link" disabled>
          Link(disabled)
        </Button>
        <br />
        <Button type="link" danger>
          Danger Link
        </Button>
        <Button type="link" danger disabled>
          Danger Link(disabled)
        </Button>
        <br />
        <Button danger>Danger Default</Button>
        <Button danger disabled>
          Danger Default(disabled)
        </Button>
        <div className="site-button-ghost-wrapper">
          <Button ghost>Ghost</Button>
          <Button ghost disabled>
            Ghost(disabled)
          </Button>
        </div>
      </div>
    </div>
  </div>
);
