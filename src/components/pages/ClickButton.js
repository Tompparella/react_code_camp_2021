import React, { useState } from 'react'
import image from './assets/button.png';
// Hiano nappi
export default function ClickButton( props ) {

    const [current, setCount] = useState(props.count ? props.count : 0);

    function increment()
    {
        let inc = 1;
        //TODO: lisää vaihtuva inkrementti johonkin tiedostoon

        console.log('Nappia painettu. Uusi arvo: ' + (current + inc));
        setCount(current + inc);
    }

    return (
        <div>
            <p>This button has been clicked {current} times.</p>
            <img src={image} onClick={increment}/>
        </div>
    );
}
