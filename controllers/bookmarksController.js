const express = require("express");
const bookmarks = express.Router();
const bookmarksArray = require("../models/bookmark.js");
const { validateURL } = require("../models/validations.js");

bookmarks.get("/", (req, res) => {
  res.json(bookmarksArray);
});

// SHOW
bookmarks.get("/:arrayIndex", (req, res) => {
  const { arrayIndex } = req.params;
  if (bookmarksArray[arrayIndex]) {
    res.json(bookmarksArray[arrayIndex]);
  } else {
    res.status(404).json({ error: "Not found" });
  }
});

// CREATE
bookmarks.post("/", validateURL, (req, res) => {
  bookmarksArray.push(req.body);
  res.json(bookmarksArray[bookmarksArray.length - 1]);
});

module.exports = bookmarks;
