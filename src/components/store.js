import React, { useState } from 'react'

export default function UpdateStore (props) {

    const [value, setValue] = useState( props.value );

    function changeToBlue () {
        console.log('Melkeen');
        if (value > 5000000000) {
            //Change color to blue
            console.log('Onnistu');
        } 
        else {
            //Common function for all the payments that tells that user doenst have funds for purhace.
            console.log('Ei onnistunu');
        }
    }

    function changeToGreen () {
        if (props.value > 5000) {
            //Change color to green
        } 
        else {
            //Common function for all the payments that tells that user doenst have funds for purhace.
        }
    }

    function changeToPink () {
        if (props.value > 50000) {
            //Change color to pink
        } 
        else {
            //Common function for all the payments that tells that user doenst have funds for purhace.
        }
    }

    function doubleClicks () {
        if (props.value > 10000) {
            //Change clicks to double clicks
        } else {
            //Common function for all the payments that tells that user doenst have funds for purhace.
        }
    }

return(
    <div>
        <h1>Store</h1>
        <h2>Chance color</h2>
        <h3>Blue<button onClick={changeToBlue}>500</button></h3>
        <h3>Green<button>5000</button></h3>
        <h3>Pink<button>50 000</button></h3>
    
        <h2>Double cliks</h2>
        <button>1000</button>
    </div>
    
        
);

}