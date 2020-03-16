import React from "react";
import styles from "./index.less";
import { DatePicker } from "antd";

const { RangePicker } = DatePicker;

export default () => (
  <div className={styles.container}>
    <div id="components-date-picker-demo-date-render">
      <div>
        <DatePicker
          dateRender={current => {
            const style = {};
            if (current.date() === 1) {
              style.border = "1px solid #1890ff";
              style.borderRadius = "50%";
            }
            return (
              <div className="ant-picker-cell-inner" style={style}>
                {current.date()}
              </div>
            );
          }}
        />
        <RangePicker
          dateRender={current => {
            const style = {};
            if (current.date() === 1) {
              style.border = "1px solid #1890ff";
              style.borderRadius = "50%";
            }
            return (
              <div className="ant-picker-cell-inner" style={style}>
                {current.date()}
              </div>
            );
          }}
        />
      </div>
    </div>
  </div>
);
