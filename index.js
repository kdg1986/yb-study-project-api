import express from "express";
import dbconnection from "./dbconnection.js";
import livereloadMiddleware from "connect-livereload";
import livereload from "livereload";
import url from "url";
import { user } from "./api/index.js";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));
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

app.use("/api/user", user);
app.use(livereloadMiddleware());
