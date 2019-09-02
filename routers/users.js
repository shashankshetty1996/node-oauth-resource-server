const express = require("express");

let router = express.Router();

router.get("/", (req, res) => {
  res.send("user route is up");
});

module.exports = router;
