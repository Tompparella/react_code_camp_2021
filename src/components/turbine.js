import React, { Component, useEffect, useState, useContext } from 'react';
import "./turbine.css";
import base from "./pages/assets/Base.png";
import propel from "./pages/assets/Turbine.png";
import SessionContext from "../context/sessionContext";

export default function Turbine (props) {

    const{sessionData, setSessionData} = useContext(SessionContext);

    const[speed, setSpeed] = useState(100 - sessionData.score * 0.01);

    useEffect(() => {
        const timer = setInterval(() => {
            let current = 100 - sessionData.score * 0.01;

            setSpeed({
                speed: current
            });
        }, 1000);
        return () => clearInterval(timer);
    });

    return(
        <div id="turbine">
            <img id="top" style={{animation: `spin ${speed}s linear infinite`}} src={propel}/>
            <img id="bottom" src={base}/>
        </div>
    )
    
};