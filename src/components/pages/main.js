import "./main.css";
import Header from "../header";
import Name from "../name";
import { useEffect, useState } from "react";

function Main() {

  const [loggedIn, setLogin] = useState({
    loggedIn: false
  });


  /*
  Run a function to check login when visiting the page.
  If a game is found with the id found in local storage,
  load the game and set login to true.
  */
  useEffect(() => {
    async function checkLogin() {
    console.log("checkLogin");
    if (localStorage.getItem('playerId') !== null && !loggedIn.loggedIn) {

        let game = {
          playerId: localStorage.getItem('playerId')
        };

        await fetch("/getgame", {
          method: "POST",
          redirect: "follow",
          headers: {
            "Content-type": "application/json"
          },
          body: JSON.stringify(game)
      }).
      then((response) => response.json())
      .then((responseData) => {
        toggleLogin(true);
        console.log(responseData);
      });
    }
    }
  checkLogin();
});
    
  // Toggles login hook
  const toggleLogin = (bool) => {
    console.log("toggleLogin");
    setLogin({
      loggedIn: bool
    });
  };

  return (
    <div className="Main">

        <div className="header">
          <Header/>
        </div>
        <div className="Content">

          { /* If the player has already entered a name, doesn't render the name component, and instead renders the game itself. */

          !loggedIn.loggedIn ?
            <div className="Name">
              <Name triggerLogin={toggleLogin}/>
            </div>

            : /* ADD ALL OF YOUR COMPONENTS (except name) AFTER THIS COLON FOR RENDER TO WORK PROPERLY!!*/

            <p>Insert Game Here :)</p>
          }
        </div>
    </div>
  );
};
  
  export default Main;