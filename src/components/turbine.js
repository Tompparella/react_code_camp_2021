import React, { Component, useEffect, useState, useContext } from 'react';
import "./turbine.css";
import base_green from "./pages/assets/base_green.png";
/*
import base_pink from "./pages/assets/base_pink.png";
import base_blue from "./pages/assets/base_blue.png";
import base_yellow from "./pages/assets/base_yellow.png";
*/
import propel_green from "./pages/assets/turbine_green.png";
/*
import propel_pink from "./pages/assets/turbine_pink.png";
import propel_blue from "./pages/assets/turbine_blue.png";
import propel_yellow from "./pages/assets/turbine_yellow.png";
*/
import SessionContext from "../context/sessionContext";

export default function Turbine (props) {

    const{sessionData, setSessionData} = useContext(SessionContext);
    const[speed, setSpeed] = useState(100 - sessionData.score * 0.01);

    /*
    pickColor(() => {
        setColor(sessionData.color);
    });
    */

    useEffect(() => {
        const timer = setInterval(() => {
            let current = 100 - sessionData.score * 0.01;

            setSpeed(current);
        }, 1000);
        return () => clearInterval(timer);
    });


    return(
        <div id="turbine">
            <img id="top" style={{animation: `spin ${(speed > 0.3 ? speed : 0.3)}s linear infinite`}} src={(sessionData.propel_color !== "undefined") ? sessionData.propel_color : propel_green}/>
            <img id="bottom" src={(sessionData.base_color !== "undefined") ? sessionData.base_color : base_green}/>
        </div>
    )
    
};