import "./main.css";
import Header from "../header";
import Name from "../name";
import { useState } from "react";

function Main() {

  const [loggedIn, setLogin] = useState({
    loggedIn: false
  });

    const toggleLogin = (bool) => {
      console.log("Jahas");
      setLogin({
        loggedIn: bool
      });
    };

    return (
      <div className="Main">
          <p>Welcome to react!</p>
          <div className="header">
            <Header/>
          </div>
          <div className="Name">
            <Name triggerLogin={toggleLogin}/>
          </div>
      </div>
    );
  }
  
  export default Main;