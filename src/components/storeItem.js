import React, { useEffect, useState } from 'react'
import './storeItem.js'

export default function storeItem( props ) {

    const testFunc =()=> {
        console.log("STOREITEM TESTIPAINALLUS");
    }

    return (
        <div className='main'>
            <button onClick={testFunc}> testinappi </button>
        </div>
    );
}
