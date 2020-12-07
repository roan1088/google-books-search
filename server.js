// Importing express server module
const express = require("express");
const path = require("path");
// Importing the mongoose and morgan logger modules
const logger = require("morgan");
const mongoose = require("mongoose");

// Setting the Express App
const app = express();
const PORT = process.env.PORT || 3001; // Since React app will be on PORT 3000

// Setting up logger
app.use(logger("dev"));

// Setting the Express App to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Connecting to the db
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/google-books", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});

// Routes
// For static files, look in the client/build folder
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Starting the server
app.listen(PORT, function() {
  console.log("Server listening on PORT " + PORT);
});