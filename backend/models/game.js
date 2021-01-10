const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let GameSchema = new Schema({
    player: String,
    score: Number
});

module.exports = mongoose.model("Game", GameSchema);