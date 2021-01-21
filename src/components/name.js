import React, { Component } from 'react';
import "./name.css";
import SessionContext from "../context/sessionContext";

export default class Name extends Component {

    static contextType = SessionContext;
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

    // Submits the name and creates a new game. Also gives the games' id to local storage for fetching data in the future.
    async submitName(event) {
        event.preventDefault();
        let username = this.state.username;
        if ((username !== "") && (username.length < 20)) {
            try {

                const game = {
                    username: this.state.username
                };

                await fetch("/newgame", {
                    method: "POST",
                    redirect: "follow",
                    headers: {
                        "Content-type": "application/json"
                    },
                    body: JSON.stringify(game)
                })
                .then((response) => {
                    //console.log(response);
                    response.json()
                    .then((result) => {

                        if (result.msg !== undefined) {
                            alert(result.msg);
                            return;
                        } else {
                            console.log(result);
                            localStorage.setItem("login", JSON.stringify(true));
                            localStorage.setItem("playerId", (result._id));
                            this.props.triggerLogin(true);
                        }
                    });
                });

            } catch (error) {
                console.log(error);
            }
        } else {
            console.log(this.context);
            alert("Please enter a name that's under 20 characters long");
            return;
        }
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