import { render } from '@testing-library/react';
import React, { useState } from 'react';

export default function NameBoard( props )
{
    const [name, setName] = useState(props.name ? props.name : '');

    
    return(
        <h1>Current player's name: {name}</h1>
    )
}