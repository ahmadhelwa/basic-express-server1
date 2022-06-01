"use strict";

const express = require("express");
const validator = require("./middleware/validator");
const logger = require("./middleware/ logger");
const notFoundHandler = require("./ error-handlers/404");
const errorHandeler = require("./ error-handlers/500");
const app = express();

app.use(logger);

app.get("/", (req, res) => {
  res.send("hello ");
});

app.get("/Person", validator(), (req, res) => {
  res.status(200).json({
    name: req.query.name,
  });
});
function start(port) {
  app.listen(port, () => {
    console.log(`i'm listing on port ${port}`);
  });
}

app.use("*", notFoundHandler);
app.use(errorHandeler);

module.exports = {
  app: app,
  start: start,
};
