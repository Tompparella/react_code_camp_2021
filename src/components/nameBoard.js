import { render } from '@testing-library/react';
import React, { useState } from 'react';

export default function nameBoard( props )
{
    const [name, setName] = useState('');

    setName(name + this.props.name);
    return(
        <h1>Current player's name: {name}</h1>
    )
}