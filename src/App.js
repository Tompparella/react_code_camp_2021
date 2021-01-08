import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';
import Main from "./components/pages/main";

function App() {
  return (

    <BrowserRouter>
      <Switch>
      <Route exact path="/" component={Main}/>
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
