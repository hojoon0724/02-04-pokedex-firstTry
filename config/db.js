// -----------------------------------------------------
// Dependencies
// -----------------------------------------------------

const mongoose = require("mongoose");

// connect to our database
mongoose.connect(process.env.DATABASE_URL);

// connection status listener
mongoose.connection.on("error", (err) => console.log("there's an error"));
mongoose.connection.on("connected", (err) => console.log("connected to mongo"));
mongoose.connection.on("disconnected", (err) => console.log("disconnected to mongo"));
