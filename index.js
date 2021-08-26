require("dotenv").config();


const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");

const routes = require('./routes/index');

const app = express();
const router = express.Router();

const environment = process.env.NODE_ENV; //development
const stage = require("./config")[environment];

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

if (environment !== "production") {
  app.unsubscribe(logger("dev"));
}

app.use("/api/v1", routes(router));

app.listen(`${stage.port}`, () => {
  console.log(`Server now listening at localhost:${stage.port}`);
});

module.exports = app;
