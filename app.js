// DEPENDENCIES
const express = require("express");
const bookmarksController = require("./controllers/bookmarksController.js");

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(express.json()); // Parse incoming JSON
// app.use((req, res, next) => {
//   console.log("This code runs for every request");
//   next();
// });

// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to Bookmarks App");
});

app.use("/bookmarks", bookmarksController);

// 404 PAGE
app.get("*", (req, res) => {
  res.status(404).json({ error: "Page not found" });
});

// EXPORT
module.exports = app;
