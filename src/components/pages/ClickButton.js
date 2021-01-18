import React, { useEffect, useState } from 'react'
import image from './assets/button.png';
import * as styles from './ClickButton.css';
import Main from './main';
import './main.css'

export default function ClickButton( props ) {

    const [current, setCount] = useState(props.count ? props.count : 0);

    function increment()
    {
        let inc = 1;
        setCount(current + inc);
    };

    // Interval that updates the score in the database every ten seconds.
    useEffect(() => {
        const timer = setInterval(() => {
            updateDB();
        }, 10000);
        return () => clearInterval(timer);
    })

    const updateDB = function() {
        let score = {
            playerId: localStorage.getItem('playerId'),
            score: current
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
            <p className={"bold"}>The button has been clicked {current} times.</p>
            <img src={image} onClick={increment}/>
        </div>
    );
}
