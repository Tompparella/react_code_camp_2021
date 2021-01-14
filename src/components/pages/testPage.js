import React from 'react';

import './testPage.css';

import ClickButton from './ClickButton'
import nameBoard from './nameBoard'
//import Leaderboard from '../leaderboard';

function Test(props) {
    return (
      <>
          <ClickButton count={0} />
          <nameBoard/>
      </>
    );
  }

  export default Test;