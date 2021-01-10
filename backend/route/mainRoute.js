var express = require("express");
var router = express.Router();
var mainController = require("../controller/mainController");

// Router for the page index.
router.get("/", mainController.index);

router.post("/newgame", mainController.newGame);

module.exports = router;