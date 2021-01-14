import React, { Component } from 'react';
import "./leaderboard.css";

export default class Leaderboard extends Component {

    constructor() {
        super();
        this.state = {
            scores: [],
        }
    }

    componentDidMount() {
        console.log("Finding games");
        fetch("/find", {
            method: "GET"
        })
        .then((response) => {
            response.json()
            .then((data) => {

                if (data[0] == null) {
                    console.log("No games found");
                    return;
                }
                data.sort((a,b) => {
                    return b.score - a.score;
                });
                console.log(data);
                for (let i=0; i<10; i++) {
    
                    let game = {
                        player: data[i].player,
                        score: data[i].score,
                    };
                    this.setState({
                        scores: this.state.scores.concat(game)
                    })
                } //TODO Sort the highest and return only 10
            });
        });
    }

    render() {
        return(
            <div id="container">
                <p id="board-text">Leaderboard top 10</p>
                <div className="leaderboard">
                    <ul>
                        {this.state.scores.map(score =>
                            <div className="score-container" key={score._id}>
                                <li className="player-name" key={score.player}>{score.player}</li>
                                <li className="player-score" key={score.score}>{score.score}</li>
                            </div>
                        )}
                    </ul>
                </div>
            </div>
        )
    }
}