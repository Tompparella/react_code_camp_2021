const Score = require("../models/score");

const { sanitizeBody } = require("express-validator");
const { ObjectID, ObjectId } = require("mongodb");

exports.index = async function (req, res) {
    const scores = await Score.findById(req.user);
    res.json({
      scoreList: scores
    });
  };