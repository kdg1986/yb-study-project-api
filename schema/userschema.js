const mongoose = require("mongoose");
const schema = new mongoose.Schema({
  name: String,
  data: Object,
});
module.exports = () => mongoose.model("User", schema);
