const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("About This Page: Exercise Thress");
});

router.get("/me", (req, res) => {
  res.send("About Me: Exercise Thress");
});

router.get("/json", (req, res) => {
  res.send({ itemOne: "cool", itemTwo: "cooler" });
});

module.exports = router;
