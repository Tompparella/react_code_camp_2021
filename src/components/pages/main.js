import "./main.css";
import Header from "../header";
import Name from "../name";

function Main() {
    return (
      <div className="Main">
          <p>Welcome to react!</p>
          <div className="header">
            <Header/>
          </div>
          <div className="Name">
            <Name/>
          </div>
      </div>
    );
  }
  
  export default Main;