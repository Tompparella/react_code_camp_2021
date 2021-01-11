import React, { useState } from 'react'
import image from './assets/button.png';
// Hiano nappi
export default function ClickButton( props ) {

    const [count, setCount] = useState(props.count ? props.count : 0);

    function increment()
    {
        let inc = 1;
        //TODO: lisää vaihtuva inkrementti johonkin kansioon

        console.log('Nappia painettu. Uusi arvo: ' + (count + inc));
        setCount(count + inc);
    }

    return (
        <div>
            <p>This button has been clicked {count} times.</p>
            <img src={image} onClick={increment}/>
        </div>
    );
}
