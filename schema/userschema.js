import mongoose from "mongoose";
// const mongoose = require("mongoose");
const schema = new mongoose.Schema({
  name: String,
  data: Object,
});

// static method
schema.statics.userInfo = function (req) {
  return this.findOne({ name: req.params.userid });
};

export default mongoose.model("User", schema);

// module.exports =
