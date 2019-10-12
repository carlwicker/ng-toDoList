const express = require("express");
const app = express();
const cors = require("cors");
const router = express.Router();
const port = process.env.PORT || 3000;
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const Item = require("./models/item");

// BodyParser setup
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

// Development CORS fix
app.use(cors());

// Start Environmental Varibles
require("dotenv").config();

// Initialise Mongoose Connection
var db = mongoose.connection;

mongoose.connect(
  "mongodb://carlwicker:potato01@ds331198.mlab.com:31198/to-do-list",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

// Error Check Mongoose
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  console.log("Mongoose Connected to Mlab");
});

// Mongoose Item Schema
const ItemSchema = new mongoose.Schema({
  name: String,
  created: Date
});

// Item Model
const toDoItem = mongoose.model("to-do-lists", ItemSchema);

// Forward to Angular Front End
app.get("/", function(req, res) {
  res.redirect("http://localhost:4200");
});

// GET All Items
app.get("/api", function(req, res) {
  toDoItem.find((err, listItems) => {
    if (err) return console.log(err);
    // console.log(listItems);
    res.json(listItems);
  });
});

// POST Item
app.post("/api", bodyParser.json(), function(req, res) {
  itemData = req.body;
  let item = new Item(itemData);
  item.save((err, res) => {
    if (err) {
      console.log(err);
    } else {
      console.log("POSTED: " + res);
    }
  });

  //console.log(itemData);
  res.json(itemData);
});

// GET Item
app.get("/api/:id", function(req, res) {
  res.json(req.params);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
