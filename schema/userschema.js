import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";

const UserSchema = new Schema({
  username: String,
  hashedPassword: String,
});

// instance
UserSchema.methods.setPassword = async function (password) {
  const hash = await bcrypt.hash(password, 10);
  this.hashedPassword = hash;
};

UserSchema.methods.checkPassword = async function (password) {
  const result = await bcrypt.compare(password, this.hashedPassword);
  return result;
};

// static
UserSchema.statics.findByUsername = function (req) {
  return this.findOne({ name: req.params.userid }).exec();
};

const user = mongoose.model("User", UserSchema);

export default user;
