import React, { Component } from 'react';
import "./name.css";

export default class Name extends Component {
    render() {
        return(
            <div id="name">
                <div id="name-container">
                    <p>Enter a name</p>
                    <form>
                        <input type="text" id="nameInput"/>
                        <input type="submit"/>
                    </form>
                </div>
            </div>
        )
    }
}