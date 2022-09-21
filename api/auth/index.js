import express from "express";
import * as authCtrl from "./auth.ctrl";
const auth = express.Router();

auth.get("/register", authCtrl.register);
auth.get("/login", authCtrl.login);
auth.post("/check", authCtrl.check);
auth.post("/logout", authCtrl.logout);
console.log("test");
export default auth;
