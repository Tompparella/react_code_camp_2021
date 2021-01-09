import React, { Component } from 'react';
import "./name.css";

export default class Name extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: ""
        };
        this.setUserName = this.setUserName.bind(this);
        this.submitName = this.submitName.bind(this);
    }

    setUserName(name) {
        this.setState( {
            username: name
        })
    }

    submitName(event) {
        event.preventDefault();
        let username = this.state.username;
        if (username !== "") {
            console.log(username);
        } else {alert("Please enter a name")}
    }

    render() {
        return(
            <div id="name">
                <div id="name-container">Enter a name
                    <form id="submitName" onSubmit={this.submitName}>
                        <input type="text" id="nameInput" onChange={(u) => this.setUserName(u.target.value)}/>
                        <input type="submit" value="Enter" id="submitBtn"/>
                    </form>
                </div>
            </div>
        )
    }
}