import React, { useState } from 'react'
import "./store.css";
//import ClickButton from '../ClickButton.js';

//<UpdateStore value={loggedIn.score}/></div>, pisteiden haku mainissa 

export default function UpdateStore (props) {

    const [value, setValue] = useState( props.value );

    function changeToBlue () {
        if (value > 500) {
            //Change color to blue
            //TODO TOMMI!!!!! Do this for all purcahes
            //Delete the balance from current count
        } 
        else { 
            alert('Insufficient funds!');
        }
    }

    function changeToGreen () {
        if (props.value > 5000) {
            //Change color to green
            //Delete the balance from current count
        } 
        else {
            alert('Insufficient funds!');
        }
    }

    function changeToPink () {
        if (props.value > 50000) {
            //Change color to pink
            //Delete the balance from current count
        } 
        else {
            alert('Insufficient funds!');
        }
    }

    function doubleClicks () {
        if (props.value > 10000) {
            //Change clicks to double clicks
            //Delete the balance from current count
        } else {
            alert('Insufficient funds!');
        }
    }

return(
    <div className="store-container">

        <h1>Store</h1>
        <h2>Change color</h2>
        
        <div className="button-container">
            <h3>Blue</h3>
            <button className="store-button" onClick={changeToBlue}>500</button>
        </div>

        <div className="button-container">
            <h3>Green</h3>
            <button className="store-button" onClick={changeToGreen}>5000</button>
        </div>

        <div className="button-container">
            <h3>Pink</h3> 
            <button className="store-button" onclick={changeToPink}>50 000</button>
        </div>

        <h2>Double clicks</h2>

        <button className="store-button">10 000</button>
        
    </div>
);

}