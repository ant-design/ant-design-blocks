import React from "react";
import styles from "./index.less";
import { DatePicker } from "antd";
import moment from "moment";

const { RangePicker } = DatePicker;

const dateFormat = "YYYY/MM/DD";
const monthFormat = "YYYY/MM";

const dateFormatList = ["DD/MM/YYYY", "DD/MM/YY"];

export default () => (
  <div className={styles.container}>
    <div id="components-date-picker-demo-format">
      <div>
        <DatePicker
          defaultValue={moment("2015/01/01", dateFormat)}
          format={dateFormat}
        />
        <br />
        <DatePicker
          defaultValue={moment("01/01/2015", dateFormatList[0])}
          format={dateFormatList}
        />
        <br />
        <DatePicker
          defaultValue={moment("2015/01", monthFormat)}
          format={monthFormat}
          picker="month"
        />
        <br />
        <RangePicker
          defaultValue={[
            moment("2015/01/01", dateFormat),
            moment("2015/01/01", dateFormat)
          ]}
          format={dateFormat}
        />
      </div>
    </div>
  </div>
);
