const express = require("express");

const { verifyToken } = require("../middleware/");

let router = express.Router();

router.get("/", verifyToken, (req, res) => {
  res.send("user route is up");
});

module.exports = router;
