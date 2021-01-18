import React, { useEffect, useState } from 'react'
import './storeItem.css'

export default function storeItem( props ) {

    const testFunc =()=> {
        console.log("STOREITEM TESTIPAINALLUS");
    }

    return (
        <div className='jotain'>
            <h1>testiheader storeitemissa</h1>
            <button onClick={testFunc}> testinappi </button>
        </div>
    );
}
