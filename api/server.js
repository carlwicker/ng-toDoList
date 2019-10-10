const express = require("express");
const app = express();
const cors = require("cors");
const router = express.Router();
const port = process.env.PORT || 3000;
const db = "mongodb://carlwicker:potato01@ds331198.mlab.com:31198/to-do-list";
const bodyParser = require("body-parser");

const mongoose = require("mongoose");

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(cors());

mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true });

const toDoItem = mongoose.model("to-do-list", { name: String });

let listItemsSchema = new mongoose.Schema({
  id: String,
  desc: String
});

let ListItems = mongoose.model("ListItems", listItemsSchema);

// Forward to Angular Front End
app.get("/", function(req, res) {
  res.redirect("http://localhost:4200");
});

// Test DB Connection Details
app.get("/api", function(req, res) {
  toDoItem.find((err, listItems) => {
    if (err) return console.log(err);
    // console.log(listItems);
    res.send(listItems);
  });
});

app.post("/api", function(req, res) {
  name = "OUTPUT: " + req;

  console.log(req.body);
  res.send(name.json);
});

app.get("/api/:id", function(req, res) {
  res.json(req.params.id);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
