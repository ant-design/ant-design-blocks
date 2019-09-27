import React from 'react';
import { Affix, Button } from 'antd';

export default () => 
  <Affix offsetTop={120} onChange={affixed => console.log(affixed)}>
    <Button>120px to affix top</Button>
  </Affix>;
