import React, { useState } from 'react'
import image from './assets/button.png';
// Hiano nappi
export default function ClickButton( props ) {

    const [count, setCount] = useState(props.count ? props.count : 0);

    function onClick()
    {
        console.log('nappia painettu');
        setCount(count + 1);
    }

    return (
        <div>
            <p>This button has been clicked {count} times.</p>
            <img src={image} onClick={onClick}/>
        </div>
    );
}
