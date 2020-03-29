import React from "react";
import styles from "./index.less";
import { Card } from "antd";

const gridStyle = {
  width: "25%",
  textAlign: "center"
};

export default () => (
  <div className={styles.container}>
    <div id="components-card-demo-grid-card">
      <Card title="Card Title">
        <Card.Grid style={gridStyle}>Content</Card.Grid>
        <Card.Grid hoverable={false} style={gridStyle}>
          Content
        </Card.Grid>
        <Card.Grid style={gridStyle}>Content</Card.Grid>
        <Card.Grid style={gridStyle}>Content</Card.Grid>
        <Card.Grid style={gridStyle}>Content</Card.Grid>
        <Card.Grid style={gridStyle}>Content</Card.Grid>
        <Card.Grid style={gridStyle}>Content</Card.Grid>
      </Card>
    </div>
  </div>
);
