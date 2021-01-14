import React from 'react';

import './testPage.css';

import ClickButton from './ClickButton';
import NameBoard from '../NameBoard';
//import Leaderboard from '../leaderboard';

import UpdateStore from '../store'

function Test(props) {
    return (
      <>
          <ClickButton count={0} />
          <NameBoard name={"puntari M"}/>
          <ClickButton count={5} />
          <UpdateStore value={1000000} /> 
      </>
    );
  }

  export default Test;