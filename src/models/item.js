const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  name: String,
  created: Date
});

module.exports = mongoose.model("item", itemSchema, "to-do-lists");
