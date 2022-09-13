const express = require("express");
const app = express();
const port = 4000;
const db = require("./dbconnection");
const livereload = require("livereload");
const livereloadMiddleware = require("connect-livereload");
const { user } = require("./api");

db();

const liveServer = livereload.createServer({
  exts: ["html", "css", "ejs"],
  debug: true,
});

liveServer.watch(__dirname);
app.use("/api/user", user);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.use(livereloadMiddleware());
