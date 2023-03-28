const express = require("express");
const pitches = require("./pitches");

const apiRouter = () => {
  const routes = express.Router();

  const pitchesRouter = pitches();

  routes.use("/pitches", pitchesRouter);
  return routes;
};

module.exports = apiRouter;
