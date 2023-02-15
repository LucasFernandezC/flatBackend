const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let products = new Schema({
  title: { type: String },
  description: { type: String },
  price: { type: Number },
  category: { type: String },
  datecreated: { type: Date },
  url: { type: String },
});

module.exports = mongoose.model("products", products);
