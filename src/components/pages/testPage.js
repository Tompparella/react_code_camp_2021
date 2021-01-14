import React from 'react';

import './testPage.css';

import ClickButton from './ClickButton'

import UpdateStore from '../store'

function Test(props) {
    return (
      <>
          <ClickButton count={5} />
          <UpdateStore value={1000000} /> 
      </>
    );
  }

  export default Test;