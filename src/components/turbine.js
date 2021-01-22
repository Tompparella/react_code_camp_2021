import React, { Component, useEffect, useState, useContext } from 'react';
import "./turbine.css";
import base_green from "./pages/assets/base_green.png";
/*
import base_pink from "./pages/assets/base_pink.png";
import base_blue from "./pages/assets/base_blue.png";
import base_yellow from "./pages/assets/base_yellow.png";
*/
import propel_green from "./pages/assets/turbine_green.png";
import anti_knutas from "./pages/assets/anti_knutas.png";
/*
import propel_pink from "./pages/assets/turbine_pink.png";
import propel_blue from "./pages/assets/turbine_blue.png";
import propel_yellow from "./pages/assets/turbine_yellow.png";
*/
import generator from "./pages/assets/generator.png";
import smoke from "./pages/assets/smoke.png";
import SessionContext from "../context/sessionContext";

export default function Turbine (props) {
    const meme = 100000000;
    const{sessionData, setSessionData} = useContext(SessionContext);
    const speed = (sessionData.score >= meme) ? 1 : 100 - sessionData.score * 0.01;
    const propel_src = (sessionData.score >= meme) ? anti_knutas : ((sessionData.propel_color && sessionData.propel_color !== "undefined") ? sessionData.propel_color : propel_green);
    const base_src = (sessionData.base_color && sessionData.base_color !== "undefined") ? sessionData.base_color : base_green;

    /*
    pickColor(() => {
        setColor(sessionData.color);
    });
    */

    return(
        <div id="turbine">
            <img id="top" style={{animation: `spin ${(speed > 0.3 ? speed : 0.3)}s linear infinite`}} src={propel_src}/>
            <img id="bottom" src={base_src}/>
            {localStorage.getItem("generatorOn") && (
                <div>
                    <img id="generator" src={generator}/>
                    <img id="smoke" style={{animation: `spin ${1}s linear infinite`}} src={smoke}/>
                </div>
            )}
        </div>
    )
    
};