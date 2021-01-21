import { render } from '@testing-library/react';
import React, { useContext, useState } from 'react';
import './nameBoard.css';
import SessionData from "../context/sessionContext";


export default function NameBoard( props )
{
    const {sessionData, setSessionData} = useContext(SessionData);
    const [name, setName] = useState(sessionData.player);

    
    return(
        <h1 id="NameBoard">{name}</h1>
    )
}