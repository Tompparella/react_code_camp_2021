var express = require("express");
var router = express.Router();
var mainController = require("../controller/mainController");

// Router for the page index.
router.get("/", mainController.index);

router.post("/newgame", mainController.newGame);

router.post("/getgame", mainController.getGame);

router.get("/find", mainController.find);

router.post("/update", mainController.update);

//router.post("/updateItems", mainController.updateItems);


module.exports = router;