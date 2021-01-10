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

    async submitName(event) {
        event.preventDefault();
        let username = this.state.username;
        if (username !== "") {
            try {
                const game = {
                    username: this.state.username
                };
                console.log(game);
                await fetch("/newgame", {
                    method: "POST",
                    redirect: "follow",
                    headers: {
                        "Content-type": "application/json"
                    },
                    body: JSON.stringify(game)
                }).then((response) => {
                    console.log(response);
                    response.json().then((result) => {
                        console.log(result);
                        localStorage.setItem("login", JSON.stringify({
                            login: true,
                            token: result.token
                        }));
                        if (result.msg !== undefined) {
                            alert(result.msg);
                            return;
                        }
                    })
                });
            } catch (error) {
                console.log(error);
            }

        } else {
            alert("Please enter a name");
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