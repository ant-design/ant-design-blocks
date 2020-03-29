import React from "react";
import styles from "./index.less";
import { Modal, Button } from "antd";

const ReachableContext = React.createContext();
const UnreachableContext = React.createContext();

const config = {
  title: "Use Hook!",
  content: (
    <div>
      <ReachableContext.Consumer>
        {name => `Reachable: ${name}!`}
      </ReachableContext.Consumer>
      <br />
      <UnreachableContext.Consumer>
        {name => `Unreachable: ${name}!`}
      </UnreachableContext.Consumer>
    </div>
  )
};

const App = () => {
  const [modal, contextHolder] = Modal.useModal();

  return (
    <ReachableContext.Provider value="Light">
      <Button
        onClick={() => {
          modal.confirm(config);
        }}
      >
        Confirm
      </Button>
      <Button
        onClick={() => {
          modal.warning(config);
        }}
      >
        Warning
      </Button>
      <Button
        onClick={() => {
          modal.info(config);
        }}
      >
        Info
      </Button>
      <Button
        onClick={() => {
          modal.error(config);
        }}
      >
        Error
      </Button>

      {/* `contextHolder` should always under the context you want to access */}
      {contextHolder}

      {/* Can not access this context since `contextHolder` is not in it */}
      <UnreachableContext.Provider value="Bamboo" />
    </ReachableContext.Provider>
  );
};

export default () => (
  <div className={styles.container}>
    <div id="components-modal-demo-hooks">
      <App />
    </div>
  </div>
);
