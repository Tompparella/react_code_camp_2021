import "./main.css";

import storeItem from "../storeItem"

import Header from "../header";
import Name from "../name";
import Leaderboard from "../leaderboard";
import ClickButton from "./ClickButton";
import Turbine from "../turbine";

import { useEffect, useState } from "react";

function Main() {

  const [info, setInfo] = useState({
    loggedIn: false,
    score: 0
  });


  /*
  Run a function to check login when visiting the page.
  If a game is found with the id found in local storage,
  load the game and set login to true.
  */

  useEffect(() => 
  {
    async function checkLogin()
    {  
      console.log("checkLogin");

      if (localStorage.getItem('playerId') !== null && !info.loggedIn)
      {
        let game = { playerId: localStorage.getItem('playerId') };
        
        await fetch
        (
          "/getgame",
          {
          method: "POST",
          redirect: "follow",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify(game)
          }
        )
        .then((response) => response.json())
        .then((responseData) => {
          toggleLogin(true, responseData.score);
          //setScore(responseData.score);
          console.log(responseData);
        });
      }
    }
    checkLogin();
  });
    
  // Toggles login hook and gives the current score.
  const toggleLogin = (bool, score) =>
  {
    console.log("toggleLogin");
    setInfo({ loggedIn: bool, score: score });
  };

  const addScore = (score) => {
    setInfo({ score: score });
  };

  
  if (!info.loggedIn)
  { 
    return (
    <div className="Main">
      <div className="header">
        <Header/>
      </div>
      <div className="Login">
        <div className="Name">
          <Name triggerLogin={toggleLogin}/>
        </div>
      </div>
    </div>
    );
  }

  
  /* ADD ALL OF YOUR COMPONENTS (except name) IN THIS RETURN STATEMENT FOR RENDER TO WORK PROPERLY!!*/
  return (
    <div className="main-window">
      <div className="header">
        <Header/>
      </div>

      <div className="main-content">
        <div className="main">
          <div className="placeholder" >placeholder header in main content</div>
          <div className="turbine"><Turbine score={info.score}/></div>
          <div className="gameButton"><ClickButton count={info.score}/></div>
          
        </div>

        <div className="top-10"><Leaderboard/></div>
      </div>
      

      <div>
        <storeItem onClick={ () => {console.log("storeitem onclick prop"); } }/>
      </div>

    </div>
  );
}
  
  export default Main;