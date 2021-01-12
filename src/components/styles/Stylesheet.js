import React from 'react'
import './styles.css'

function Stylesheet(props) {
        let className = props.primary ? 'primary' : ''
    
    return (
        <div>
            <h1 className={className + ' .bold'}> Bold + primary style @ 'components/styles/styles.css'.</h1>
        </div>
    )
}

export default Stylesheet