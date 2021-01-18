import React, { Component, useEffect, useState } from 'react';
import "./turbine.css";
import base from "./pages/assets/Base.png";
import propel from "./pages/assets/Turbine.png";

export default function Turbine (props) {

    const[score, setScore] = useState(props.score);
    const[speed, setSpeed] = useState(100 - score * 0.01);

    /*
    useEffect(() => {
        const timer = setInterval(() => {
            setSpeed({
                speed: 100 - score * 0.01
            })
        }, 1000);
        console.log("Update speed: ", speed);
        return () => clearInterval(timer);
    });
    */

    return(
        <div id="turbine">
            <img id="top" style={{animation: `spin ${speed}s linear infinite`}} src={propel}/>
            <img id="bottom" src={base}/>
        </div>
    )
};