const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let ScoreSchema = new Schema({
    player: String,
    score: Number
});

module.exports = mongoose.model("Score", ScoreSchema);