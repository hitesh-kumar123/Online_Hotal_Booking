const express = require("express");
const router = express.Router();
const user = require("./routes/user.js");

//Index - users
router.get("/", (req, res) => {
  res.send("GET for users");
});

//show-users
router.get("/:id", (req, res) => {
  res.send("GET for show user id");
});

//POST - user
router.get("/", (req, res) => {
  res.send("POST for users");
});

//DELETE - users
router.delete("/:id", (req, res) => {
  res.send("DELETE for user id");
});

module.exports = router;
