const Game = require("../models/game");

const { sanitizeBody } = require("express-validator");
const { ObjectID, ObjectId } = require("mongodb");

exports.index = async function (req, res) {
    const scores = await Score.findById(req.user);
    res.json({
      scoreList: scores
    });
  };

exports.newGame = async function (req, res) {
  sanitizeBody('*').trim().escape();
  console.log(req.body.username);
  let username = req.body.username;

  const existingGame = await Game.findOne({ player: username });
  if (existingGame) {
      return res.status(400).json({ msg: "That name is already taken!" });
  }

  let game = new Game( {
    player: username,
    score: 0
  });
  console.log(game);
  game.save().exec(function (err) {
    if (err) {
      res.send("Something went wrong!");
      next();
    }
    console.log("Game saved");
    res.end(JSON.stringify(game));
  });
};