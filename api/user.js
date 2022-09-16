import express from "express";
import User from "../schema/userschema.js";
const router = express.Router();

// http://localhost:4000/api/user/info/kim
router.get("/info/:userid", (req, res) => {
  User.userInfo(req)
    .then((user) => res.json(user))
    .catch((err) => res.json(err));
});

export default router;
