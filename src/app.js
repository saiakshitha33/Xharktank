const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const errorhandler = require("errorhandler");
const bodyParser = require("body-parser");
const routes = require("./frameworks/web/routes");
const Pitch = require("./entities/Pitch");
const Offer = require("./entities/Offer");
const cPitch = require("./middleware/checkPitch");
const cOffer = require("./middleware/checkOffer");
const off = require("./entities/Pitch");

// Connecting to DB
mongoose
  .connect(
    "mongodb+srv://harshitmalhotra:harshit123456@cluster0.h38di.mongodb.net/xharktank?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log("Connected to DB");

    let store = {};
    store.accounts = [];

    let app = express();
    app.use(bodyParser.json());
    app.use(logger("dev"));
    app.use(errorhandler());
    app.use(express.json());
    app.use(bodyParser.urlencoded({ extended: false }));

    // load routes
    app.use("/", routes());

    app.listen(3000);
  })
  .catch((error) => {
    console.log(error);
  });
