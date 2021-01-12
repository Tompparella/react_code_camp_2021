import React /*, { useState }*/ from 'react';

import './testPageAlex.css';

import ClickButton from './ClickButton'
//import Stylesheet from '../styles/Stylesheet';
import primary from '../styles/styles.css';

function Test() {
    return (
      <div>
          <ClickButton count={5} style={primary}/>
      </div>
    );
  }

  export default Test;