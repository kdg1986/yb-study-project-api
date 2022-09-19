import mongoose from "mongoose";
const schema = new mongoose.Schema({
  name: String,
  data: Object,
});

// static method
schema.statics.userInfo = function (req) {
  return this.findOne({ name: req.params.userid }).exec();
};

export default mongoose.model("User", schema);
