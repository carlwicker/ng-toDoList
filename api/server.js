const express = require("express");
const app = express();
const port = 3000;
const db = "mongodb://carlwicker:potato01@ds331198.mlab.com:31198/to-do-list";

const mongoose = require("mongoose");

mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true });

const toDoItem = mongoose.model("to-do-list", { name: String });

// Forward to Angular Front End
app.get("/", function(req, res) {
  res.redirect("http://localhost:4200");
});

// Test DB Connection Details
app.get("/api", function(req, res) {
  res.send("Test DB: " + db + "<br>Port: " + port);

  const ListItem = new toDoItem({ name: "Carl" });
  ListItem.save().then(() => console.log(ListItem));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
