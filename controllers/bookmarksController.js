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

// DELETE
bookmarks.delete("/:indexArray", (req, res) => {
  if (bookmarksArray[req.params.indexArray]) {
    const deletedBookmark = bookmarksArray.splice(req.params.indexArray, 1);
    res.status(200).json(deletedBookmark);
  } else {
    res.status(404).json({ error: "Not Found" });
  }
});

// UPDATE
bookmarks.put("/:arrayIndex", validateURL, async (req, res) => {
  if (bookmarksArray[req.params.arrayIndex]) {
    bookmarksArray[req.params.arrayIndex] = req.body;
    res.status(200).json(bookmarksArray[req.params.arrayIndex]);
  } else {
    res.status(404).json({ error: "Not Found" });
  }
});

module.exports = bookmarks;
