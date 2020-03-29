import React from 'react';import styles from './index.less';
import React, { useState } from 'react';
import { Button, Alert } from 'antd';

const { ErrorBoundary } = Alert;
const ThrowError: React.FC = () => {
  const [error, setError] = useState<Error>();
  const onClick = () => {
    setError(new Error('An Uncaught Error'));
  };

  if (error) {
    throw error;
  }
  return (
    <Button type="danger" onClick={onClick}>
      Click me to throw a error
    </Button>
  );
};

export default () => <div className={styles.container}><div id="components-alert-demo-error-boundary">
  <ErrorBoundary>
    <ThrowError />
  </ErrorBoundary></div></div>;
