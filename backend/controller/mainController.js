const Game = require("../models/game");

const { sanitizeBody } = require("express-validator");
const { ObjectID, ObjectId } = require("mongodb");

// Nothing special on the index yet.
exports.index = async function (req, res) {
    /*const game = await Game.findById(req.user);
    res.json({
      scoreList: scores
    });
    */
  };

/*
Creates a new game entry to the database and returns info form it to the frontend.
*/
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
  game.save(function (err) {
    if (err) {
      res.send("Something went wrong!");
      next();
    }
    console.log("Game saved");
    res.end(JSON.stringify(game));
  });
};

/*
Tries to find a game with the given id from local storage. 
If nothing is found, returns a 400 error, but doesn't
notify the user since this isn't necessary.
*/
exports.getGame = async function (req, res) {
  console.log(req.body.playerId);
  let id = req.body.playerId;

  const existingGame = await Game.findOne({ _id: id });
  if (!existingGame) {
    return res.status(400).json({ msg: "No game found with that id" });
  }
  console.log(existingGame);
  res.end(JSON.stringify(existingGame));
};

exports.find = function (req, res, next) {
  Game.find().exec(function (err, games) {
    if (err) {
      res.send("Something went wrong!");
      next();
    }
    res.end(JSON.stringify(games));
  });
};

exports.update = function (req, res) {
  let id = req.body.playerId;
  let score = req.body.score;

  console.log("Updating");

  Game.updateOne({ _id: id }, { score: score }, function (err, docs) {
    if (err) {
      console.log(err);
    }
  });
  res.end();
};