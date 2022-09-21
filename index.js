import express from "express";
import dbconnection from "./dbconnection";
import livereloadMiddleware from "connect-livereload";
import livereload from "livereload";
import { auth } from "@API";

const app = express();
const port = 4000;

dbconnection();

livereload
  .createServer({
    exts: ["html", "css", "ejs"],
    debug: true,
  })
  .watch(__dirname);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/auth", auth);

app.use(livereloadMiddleware());
