const express = require("express");
const http = require("http");
const path = require("http");

const cors = require("cors");
const router = express.Router();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const Item = require("./src/models/item");

const app = express();

const port = process.env.PORT || 3000;

// Development CORS fix
app.use(cors());

app.use(express.static(__dirname + "/dist/to-do-list"));

app.get("", (req, res) => {
  res.sendfile(path.join(__dirname));
});

const server = http.createServer(app);

// Start Environmental Varibles
require("dotenv").config();

// BodyParser setup
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

// Initialise Mongoose Connection
var db = mongoose.connection;

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

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
  res.send();
});

// GET All Items
app.get("/api", function(req, res) {
  toDoItem.find((err, listItems) => {
    if (err) return console.log(err);
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
  res.redirect("/api");
});

// DELETE Item
app.get("/api/:id/delete", function(req, res) {
  id = req.params.id;
  toDoItem.deleteOne({ _id: id }, function(err) {
    if (err) return handleError(err);
  });
  res.redirect("/");
});

// EDIT Item
app.get("/api/:id/edit", function(req, res) {
  id = req.params.id;
  res.json(id);
});

server.listen(port, () => console.log("Running..."));
