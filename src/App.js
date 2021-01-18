import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';
import SessionContext from "./context/sessionContext";

//sivujen importit
import Main from "./components/pages/main";
import Test from "./components/pages/testPage";

//tyylien importit
import { useState } from "react";

import TestAlex from "./components/pages/testPageAlex";


function App() {

  const [sessionData, setSessionData ] = useState({
    player: undefined,
    score: 0
  });

  let router = (
    <BrowserRouter>
      <SessionContext.Provider value={{ sessionData, setSessionData }}>
        <Switch>
          <Route exact path="/" component={Main}/>
          <Route exact path="/test" component={Test}/>
          <Route exact path="/testAlex" component={TestAlex}/>
        </Switch>
      </SessionContext.Provider>
    </BrowserRouter>
  );

  return (
    <div className="App">
      {router}
    </div>
  );
}

export default App;
