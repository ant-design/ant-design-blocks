import React from "react";
import { Anchor } from "antd";

const { Link } = Anchor;

class AnchorExample extends React.Component {
  state = {
    targetOffset: undefined
  };

  componentDidMount() {
    this.setState({
      targetOffset: window.innerHeight / 2
    });
  }

  render() {
    return (
      <Anchor targetOffset={this.state.targetOffset}>
        <Link href="#components-anchor-demo-basic" title="Basic demo" />
        <Link href="#components-anchor-demo-static" title="Static demo" />
        <Link href="#API" title="API">
          <Link href="#Anchor-Props" title="Anchor Props" />
          <Link href="#Link-Props" title="Link Props" />
        </Link>
      </Anchor>
    );
  }
}

export default () => (
  <div className="container">
    <div id="components-anchor-demo-targetOffset">
      <AnchorExample />
    </div>
  </div>
);
