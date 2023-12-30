// -----------------------------------------------------
// Dependencies
// -----------------------------------------------------
const express = require("express");
const morgan = require("morgan");
const methodOverride = require("method-override");
require("dotenv").config();
require("./config/db.js");

// -----------------------------------------------------
// Application Object
// -----------------------------------------------------
const app = express();
const { PORT = 3013 } = process.env;
const pokemon = require("./models/pokemon.js");

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
app.get("/index", (req, res) => {
  res.render("index.ejs", { pokemon });
});

// New
app.get("/index/new", (req, res) => {
  res.render("new.ejs");
});

// Delete
app.delete("/index/:id", (req, res) => {
  const id = req.params.id;
  pokemon.splice(id, 1);
  res.redirect("/index");
});

// Update
app.put("/index/:id", (req, res) => {
  console.log(req.body);
  let updatedData = {
    name: req.body.name,
    type: [req.body.type[0], req.body.type[1]],
    stats: {
      hp: req.body.hp,
      attack: req.body.attack,
      defense: req.body.defense,
      spattack: req.body.spattack,
      spdefense: req.body.spdefense,
      speed: req.body.spdefense,
    },
  };
  console.log(updatedData);
  let existingData = pokemon[req.params.id];
  req.body = updatedData;
  console.log(req.body);
  let mergedData = {
    ...existingData,
    ...req.body,
  };
  pokemon[req.params.id] = mergedData;
  console.log(mergedData);
  res.redirect("/index");
});

// Create
app.post("/index", (req, res) => {
  const body = req.body;
  console.log(req.body);
  pokemon.push(body);
  res.redirect("/index");
});

// Edit
app.get("/index/:id/edit", (req, res) => {
  console.log(pokemon[req.params.id]);
  const id = req.params.id;
  const pokemonName = pokemon[id];
  res.render("edit.ejs", { pokemon, pokemonName, id });
});

// Show
app.get("/index/:id", (req, res) => {
  const id = req.params.id;
  const pokemonName = pokemon[id];
  res.render("show.ejs", { pokemon, pokemonName, id });
});

// -----------------------------------------------------
// GET requests
// -----------------------------------------------------
app.get("/", (req, res) => {
  res.redirect("/index");
});

// -----------------------------------------------------
// Listener
// -----------------------------------------------------
app.listen(PORT, () => {
  console.log(`listening in port ${PORT}`);
});
