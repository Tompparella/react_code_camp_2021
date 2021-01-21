import React, { useEffect, useState, useContext } from 'react'
import image from './assets/button.png';
import SessionContext from "../../context/sessionContext";
// Hiano nappi
//thanks
import * as styles from './ClickButton.css';
import './main.css'

export default function ClickButton( props ) {

    const [current, setCount] = useState(props.count ? props.count : 0);
    const {sessionData, setSessionData} = useContext(SessionContext);

    function increment()
    {
        let inc = 100;
        let new_score = sessionData.score + inc;
        setSessionData({
            score: new_score,
            player: sessionData.player
        });
        //TODO: lisää vaihtuva inkrementti johonkin tiedostoon
        setCount(new_score);
        console.log('Nappia painettu. Uusi arvo: ' + (new_score));
        
    };

    // Interval that updates the score in the database every second.
    useEffect(() => {
        const timer = setInterval(() => {
            updateDB();
        }, 1000);
        return () => clearInterval(timer);
    })

    const updateDB = function() {
        let score = {
            playerId: localStorage.getItem('playerId'),
            score: sessionData.score
        };

        fetch("/update", {
            method: "POST",
            redirect: "follow",
            headers: {
            "Content-type": "application/json"
            },
            body: JSON.stringify(score)
        });
    }
    
    return (
        <div className='ClickButton'>
            <p className={"bold"}>{sessionData.score}</p>
            <img src={image} onClick={increment}/>
        </div>
    );
}
