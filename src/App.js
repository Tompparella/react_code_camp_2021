import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';

//sivujen importit
import Main from "./components/pages/main";
import Test from "./components/pages/testPage";
import TestAlex from "./components/pages/testPage"

//tyylien importit
import Stylesheet from './components/styles/Stylesheet';



function App() {

  let router = (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main}/>
        <Route exact path="/test" component={Test}/>
        <Route exact path="/testAlex" component={TestAlex}/>
      </Switch>
    </BrowserRouter>
  );

  return (
    <div className="App">
      <Stylesheet primary={true}/>
      {router}
    </div>
    
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
