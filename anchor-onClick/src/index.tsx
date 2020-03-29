import React from "react";
import styles from "./index.less";
import { Anchor } from "antd";

const { Link } = Anchor;

const handleClick = (
  e: React.MouseEvent<HTMLElement>,
  link: {
    title: React.ReactNode,
    href: string,
  }
) => {
  e.preventDefault();
  console.log(link);
};

export default () => (
  <div className={styles.container}>
    <div id="components-anchor-demo-onClick">
      <Anchor affix={false} onClick={handleClick}>
        <Link href="#components-anchor-demo-basic" title="Basic demo" />
        <Link href="#components-anchor-demo-static" title="Static demo" />
        <Link href="#API" title="API">
          <Link href="#Anchor-Props" title="Anchor Props" />
          <Link href="#Link-Props" title="Link Props" />
        </Link>
      </Anchor>
    </div>
  </div>
);
