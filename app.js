// DEPENDENCIES
const express = require("express");
const bookmarksController = require("./controllers/bookmarksController.js");

// CONFIGURATION
const app = express();

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
