import React, { useEffect, useState, useContext } from 'react'
import image from './assets/button.png';
import style from './ClickButton.css';
import SessionContext from "../../context/sessionContext";
// Hiano nappi
//thanks

export default function ClickButton( props ) {

    const [current, setCount] = useState(props.count ? props.count : 0);
    const {sessionData, setSessionData} = useContext(SessionContext);

    function increment()
    {
        let inc = 1;
        setSessionData({
            score: sessionData.score + inc
        });
        //TODO: lisää vaihtuva inkrementti johonkin tiedostoon
        console.log('Nappia painettu. Uusi arvo: ' + (current + inc));
        setCount(current + inc);
    }

    // Interval that updates the score in the database every ten seconds.
    useEffect(() => {
        const timer = setInterval(() => {
            updateDB();
        }, 1000);
        return () => clearInterval(timer);
    });

    const updateDB = function() {
        let score = {
            playerId: localStorage.getItem('playerId'),
            score: current
        };

        console.log("Updating: ", current);
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
            <p>This button has been clicked {sessionData.score} times.</p>
            <img src={image} onClick={increment}/>
        </div>
    );
}
