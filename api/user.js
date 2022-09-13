const express = require("express");
const router = express.Router();
const User = require("../schema/userSchema");

// http://localhost:4000/api/user/info/kim
router.get("/info/:userid", (req, res) => {
  User.userInfo(req)
    .then((user) => res.json(user))
    .catch((err) => res.json(err));
});

module.exports = router;
