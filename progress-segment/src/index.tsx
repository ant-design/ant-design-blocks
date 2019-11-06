import React from "react";
import { Tooltip, Progress } from "antd";

export default () => (
  <div className="container">
    <div id="components-progress-demo-segment">
      <div>
        <Tooltip title="3 done / 3 in progress / 4 to do">
          <Progress percent={60} successPercent={30} />
        </Tooltip>

        <Tooltip title="3 done / 3 in progress / 4 to do">
          <Progress percent={60} successPercent={30} type="circle" />
        </Tooltip>

        <Tooltip title="3 done / 3 in progress / 4 to do">
          <Progress percent={60} successPercent={30} type="dashboard" />
        </Tooltip>
      </div>
    </div>
  </div>
);
