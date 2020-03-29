import React from "react";
import styles from "./index.less";
import React, { useState } from "react";
import { Avatar, Button } from "antd";

const UserList = ["U", "Lucy", "Tom", "Edward"];
const ColorList = ["#f56a00", "#7265e6", "#ffbf00", "#00a2ae"];

const Autoset: React.FC = () => {
  const [user, setUser] = useState(UserList[0]);
  const [color, setColor] = useState(ColorList[0]);
  const changeUser = () => {
    const index = UserList.indexOf(user);
    setUser(index < UserList.length - 1 ? UserList[index + 1] : UserList[0]);
    setColor(
      index < ColorList.length - 1 ? ColorList[index + 1] : ColorList[0]
    );
  };
  return (
    <div>
      <Avatar
        style={{ backgroundColor: color, verticalAlign: "middle" }}
        size="large"
      >
        {user}
      </Avatar>
      <Button
        size="small"
        style={{ marginLeft: 16, verticalAlign: "middle" }}
        onClick={changeUser}
      >
        Change
      </Button>
    </div>
  );
};

export default () => (
  <div className={styles.container}>
    <div id="components-avatar-demo-dynamic">
      <Autoset />
    </div>
  </div>
);
