// Importing mongoose schema to create model
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Schema for the model
const BookSchema = new Schema({
  title: {type: String, unique: true},
  authors: Array,
  description: String,
  image: String,
  link: String
});

// Defining a model using the schema
const Book = mongoose.model("Book", BookSchema);

// Exporting the model
module.exports = Book;