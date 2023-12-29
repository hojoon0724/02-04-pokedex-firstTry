// -----------------------------------------------------
// Dependencies
// -----------------------------------------------------
const express = require("express");
const morgan = require("morgan");
const methodOverride = require("method-override");
require("dotenv").config();
require("./config/db.js");

const app = express();
const { PORT = 3013 } = process.env;
// -----------------------------------------------------
// Application Object
// -----------------------------------------------------

// -----------------------------------------------------
// Middleware
// -----------------------------------------------------
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use("/public", express.static("public"));

// -----------------------------------------------------
// Routes INDUCESS
// -----------------------------------------------------
// Index

// New

// Delete

// Update

// Create

// Edit

// Seed

// Show

// -----------------------------------------------------
// GET requests
// -----------------------------------------------------
app.get("/", (req, res) => {
  res.send(`pokedex root response`);
});

// -----------------------------------------------------
// Listener
// -----------------------------------------------------
app.listen(PORT, () => {
  console.log(`listening in port ${PORT}`);
});
