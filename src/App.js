import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';
import Main from "./components/pages/main";
import Test from "./components/pages/testPage";

function App() {
  return (

    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main}/>
        <Route exact path="/test" component={Test}/>
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
