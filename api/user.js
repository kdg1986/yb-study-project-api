import express from "express";
import User from "../schema/userschema";
const router = express.Router();

// http://localhost:4000/api/user/info/kim
router.get("/info/:userid", async (req, res) => {
  const user = await User.userInfo(req);
  res.json(user);
});

export default router;
