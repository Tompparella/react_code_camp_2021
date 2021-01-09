import React, { useState } from 'react';

import './testPage.css';

import ClickButton from './ClickButton'

function TestAlex(props) {
    const [count, setCount] = useState([]);
    return (
      <>
          <ClickButton count={5} />
      </>
    );
  }

  export default Test;