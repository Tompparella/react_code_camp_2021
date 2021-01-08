const mognoose = require("mongoose");
const Schema = mognoose.Schema;

let ScoreSchema = new Schema({
    player: String,
    score: Number
});

module.exports = mongoose.model("Score", ScoreSchema);