import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';

//sivujen importit
import Main from "./components/pages/main";
import Test from "./components/pages/testPage";
import TestAlex from "./components/pages/testPageAlex";


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
      {router}
    </div>
  );
}

export default App;
