import React, { useState, useContext } from 'react'
import "./store.css";
import SessionContext from "../context/sessionContext";
//import ClickButton from '../ClickButton.js';

//<UpdateStore value={loggedIn.score}/></div>, pisteiden haku mainissa 

export default function UpdateStore (props) {

    const{sessionData, setSessionData} = useContext(SessionContext);
    const [value, setValue] = useState( sessionData.score ? sessionData.score: 0 );

    function changeToBlue () {
        let score = sessionData.score;
        if (score >= 500) {
            updateValues(score, 500);
            //Change color to blue
            //TODO TOMMI!!!!! Do this for all purcahes
            //Delete the balance from current count
            console.log('Onnistu');
        } 
        else { 
            alert('Insufficient funds!');
            console.log('Ei onnistunu');
        }
    }

    function changeToGreen () {
        let score = sessionData.score;
        let price = 5000;
        if (score >= price) {
            updateValues(score, price)
            //Change color to green
            //Delete the balance from current count
        } 
        else {
            alert('Insufficient funds!');
        }
    }

    function changeToPink () {
        let score = sessionData.score;
        let price = 5000;
        if (score >= price) {
            updateValues(score, price)
            //Change color to pink
            //Delete the balance from current count
        } 
        else {
            alert('Insufficient funds!');
        }
    }

    function doubleClicks () {
        let score = sessionData.score;
        let price = 10000;
        if (score >= price) {
            updateValues(score, price)
            //Change clicks to double clicks
            //Delete the balance from current count
        } else {
            alert('Insufficient funds!');
        }
    }

    function updateValues(score, price) {
        setSessionData({
            score: score - price,
            player: sessionData.player
        });
        setValue(score-price);
    }

return(
    <div className="store-container">
        <h1>Store</h1>
        <h2>Change color</h2>
        <h3>Blue<button onClick={changeToBlue}>500</button></h3>
        <h3>Green<button onClick={changeToGreen}>5000</button></h3>
        <h3>Pink<button onClick={changeToPink}>50 000</button></h3>
    
        <h2>Double cliks</h2>
        <button onClick={doubleClicks}>10 000</button>
    </div>
    
        
);

}