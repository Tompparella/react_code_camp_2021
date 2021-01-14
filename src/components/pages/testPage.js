import React from 'react';

import './testPage.css';

import ClickButton from './ClickButton';
import NameBoard from '../NameBoard';
//import Leaderboard from '../leaderboard';

function Test(props) {
    return (
      <>
          <ClickButton count={0} />
          <NameBoard name={"puntari M"}/>
      </>
    );
  }

  export default Test;