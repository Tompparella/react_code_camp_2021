import React, { useState, useContext } from 'react'
import "./store.css";
import SessionContext from "../context/sessionContext";

// Store colors
import base_green from "./pages/assets/base_green.png";
import base_pink from "./pages/assets/base_pink.png";
import base_blue from "./pages/assets/base_blue.png";
import base_yellow from "./pages/assets/base_yellow.png";
import propel_green from "./pages/assets/turbine_green.png";
import propel_pink from "./pages/assets/turbine_pink.png";
import propel_blue from "./pages/assets/turbine_blue.png";
import propel_yellow from "./pages/assets/turbine_yellow.png";
//import ClickButton from '../ClickButton.js';

//<UpdateStore value={loggedIn.score}/></div>, pisteiden haku mainissa 

export default function UpdateStore (props) {

    const{sessionData, setSessionData} = useContext(SessionContext);
    const [value, setValue] = useState( sessionData.score ? sessionData.score: 0 );
    const d_price = (localStorage.getItem("increment") ? (Number(localStorage.getItem("increment")) * 100) : 100);

    function bluePropel () {
        let score = sessionData.score;
        if (score >= 500) {
            updateValues(score, 500, propel_blue, sessionData.base_color);

            //Change color to blue
            //TODO TOMMI!!!!! Do this for all purcahes
            //Delete the balance from current count
        } 
        else { 
            alert('Insufficient funds!');
        }
    }

    function yellowPropel () {
        let score = sessionData.score;
        let price = 5000;
        if (score >= price) {
            updateValues(score, price, propel_yellow, sessionData.base_color);
            //Change color to green
            //Delete the balance from current count
        } 
        else {
            alert('Insufficient funds!');
        }
    }

    function pinkPropel () {
        let score = sessionData.score;
        let price = 50000;
        if (score >= price) {
            updateValues(score, price, propel_pink, sessionData.base_color)
            //Change color to pink
            //Delete the balance from current count
        } 
        else {
            alert('Insufficient funds!');
        }
    }

    function blueBase () {
        let score = sessionData.score;
        let price = 500;
        if (score >= price) {
            updateValues(score, price, sessionData.propel_color, base_blue)
            //Change color to pink
            //Delete the balance from current count
        } 
        else {
            alert('Insufficient funds!');
        }
    }

    function yellowBase () {
        let score = sessionData.score;
        let price = 5000;
        if (score >= price) {
            updateValues(score, price, sessionData.propel_color, base_yellow)
            //Change color to pink
            //Delete the balance from current count
        } 
        else {
            alert('Insufficient funds!');
        }
    }

    function pinkBase () {
        let score = sessionData.score;
        let price = 50000;
        if (score >= price) {
            updateValues(score, price, sessionData.propel_color, base_pink)
            //Change color to pink
            //Delete the balance from current count
        } 
        else {
            alert('Insufficient funds!');
        }
    }

    function greenify () {
        let score = sessionData.score;
        let price = 0;
        updateValues(score, price, propel_green, base_green)
        //Change color to pink
        //Delete the balance from current count
    }

    function doubleClicks () {
        let score = sessionData.score;
        let price = d_price;

        if (score >= price) {

            updateValues(score, price, sessionData.propel_color, sessionData.base_color)
            let increment;
            if (localStorage.getItem("increment")) {
                increment = Number(localStorage.getItem("increment"));
                localStorage.setItem("increment", increment * 2 );
            } else {
                localStorage.setItem("increment", 2);
                increment = 2;
            }
            //Change clicks to double clicks
            //Delete the balance from current count
        } else {
            alert('Insufficient funds!');
        }
    }

    function generateGenerator () {
        let score = sessionData.score;
        let price = 10000;
        if (score >= price) {
            updateValues(score, price, sessionData.propel_color, sessionData.base_color)
            localStorage.setItem("generatorOn", true);
            //Change clicks to double clicks
            //Delete the balance from current count
        } else {
            alert('Insufficient funds!');
        }
    }

    function updateValues(score, price, p_color, b_color) {

        setSessionData({
            score: score - price,
            player: sessionData.player,
            propel_color: p_color,
            base_color: b_color
        });
        setValue(score-price);
        localStorage.setItem("p_color", p_color);
        localStorage.setItem("b_color", b_color);

    }

return(
    <div className="store-container">

        <h1 id="storetext">Store</h1>
        <h2 id="colortext">Change color</h2>
        
        <div className="propel-container">
            <div className="button-container">
                <h3>Blue propel</h3>
                <button className="store-button" onClick={bluePropel}>500</button>
            </div>

            <div className="button-container">
                <h3>Yellow propel</h3>
                <button className="store-button" onClick={yellowPropel}>5000</button>
            </div>

            <div className="button-container">
                <h3>Pink propel</h3> 
                <button className="store-button" onClick={pinkPropel}>50 000</button>
            </div>
        </div>

        <div className="base-container">
            <div className="button-container">
                <h3>Blue base</h3>
                <button className="store-button" onClick={blueBase}>500</button>
            </div>

            <div className="button-container">
                <h3>Yellow base</h3>
                <button className="store-button" onClick={yellowBase}>5000</button>
            </div>

            <div className="button-container">
                <h3>Pink base</h3> 
                <button className="store-button" onClick={pinkBase}>50 000</button>
            </div>
        </div>

        <div className="button-container" id="reset-btn">
            <h3>Reset to green</h3> 
            <button className="store-button" onClick={greenify}>Free</button>
        </div>

        <h2 id="d-click">Double clicks</h2>

        <button className="store-button" id="d-btn" onClick={doubleClicks}>{d_price}</button>

        <h2 id="generatortext">Purchase generator</h2>

        <button className="store-button" id="generator-btn" onClick={generateGenerator}>10 000</button>
        
    </div>
);

}