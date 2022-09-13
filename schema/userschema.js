const mongoose = require("mongoose");
const schema = new mongoose.Schema({
  name: String,
  data: Object,
});

// static method
schema.statics.userInfo = function (req) {
  return this.findOne({ name: req.params.userid });
};

module.exports = mongoose.model("User", schema);
