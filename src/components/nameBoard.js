import { render } from '@testing-library/react';
import React, { useState } from 'react';
import './nameBoard.css';


export default function NameBoard( props )
{
    const [name, setName] = useState(props.name ? props.name : '');

    
    return(
        <h1 id="NameBoard">{name}</h1>
    )
}