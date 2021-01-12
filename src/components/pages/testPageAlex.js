import React, { useState } from 'react';

import './testPage.css';

import ClickButton from './ClickButton'

function Test() {
    return (
      <>
          <ClickButton count={5}/>
      </>
    );
  }

  export default Test;