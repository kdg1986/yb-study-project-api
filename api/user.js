const express = require("express");
const router = express.Router();
const { user } = require("../schema");

const User = user();

router.get("/info/:userid", (req, res) => {
  User.findOne({ name: req.params.userid }, (err, user) => {
    res.json(user);
  });
});

module.exports = router;
