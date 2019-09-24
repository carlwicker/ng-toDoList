const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
let port = process.env.PORT || 4000;

const server = app.listen(function() {
  console.log("Listening on port " + port);
});
