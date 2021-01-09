import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';
import Main from "./components/pages/main";
import Test from "./components/pages/testPage";
import TestAlex from "./components/pages/testPageAlex"

function App() {
  return (

    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main}/>
        <Route exact path="/test" component={Test}/>
        <Route exact path="/testAlex" component={TestAlex}/>
      </Switch>
    </BrowserRouter>

    /*
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

      </header>
    </div>
    */
  );
}

export default App;
