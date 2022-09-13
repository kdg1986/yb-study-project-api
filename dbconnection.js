const mongoose = require("mongoose");
const { user } = require("./schema");

module.exports = () => {
  function connect() {
    mongoose.connect(
      "mongodb+srv://root:qwe123!%40%23@cluster.rabn0b5.mongodb.net/study",
      (err) => {
        if (err) {
          console.error("mongodb connection error", err);
        }
        console.log("mongodb connected");
      }
    );
  }
  connect();
  user();
  mongoose.connection.on("disconnected", connect);
};
