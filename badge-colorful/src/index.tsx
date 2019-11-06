import React from "react";
import { Badge } from "antd";

const colors = [
  "pink",
  "red",
  "yellow",
  "orange",
  "cyan",
  "green",
  "blue",
  "purple",
  "geekblue",
  "magenta",
  "volcano",
  "gold",
  "lime"
];

export default () => (
  <div className="container">
    <div id="components-badge-demo-colorful">
      <div>
        <h4 style={{ marginBottom: 16 }}>Presets:</h4>
        <div>
          {colors.map(color => (
            <div key={color}>
              <Badge color={color} text={color} />
            </div>
          ))}
        </div>
        <h4 style={{ margin: "16px 0" }}>Custom:</h4>
        <div>
          <Badge color="#f50" text="#f50" />
          <br />
          <Badge color="#2db7f5" text="#2db7f5" />
          <br />
          <Badge color="#87d068" text="#87d068" />
          <br />
          <Badge color="#108ee9" text="#108ee9" />
        </div>
      </div>
    </div>
  </div>
);
