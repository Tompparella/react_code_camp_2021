const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT;

var path = require("path");
var Promise = require("bluebird");

var mongoose = require("mongoose");

var mainRouter = require("./route/mainRoute");

var mongoURL = process.env.MONGODB_CONNECTION_STRING;

//Get default connection

mongoose.connect(mongoURL);
mongoose.Promise = Promise;
var db = mongoose.connection;
db.once("open", () => {
    console.log("MongoDB connection succesful!");
})
db.on("error", console.error.bind(console, "MongoDB connection error:"));

//app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//app.use(cookieParser());
app.use(cors());

app.use("/", mainRouter);

/*
app.use("/posts", postRouter);
app.use("/users", userRouter);
*/

app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // show error message
  res.status(err.status || 500);
  console.log(res.locals.error);
});

app.listen(port, () => console.log(`Server started on port ${port}`));