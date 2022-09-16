import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const { MONGO_URL, MONGO_USER, MONGO_PASSWORD } = process.env;

export default () => {
  function connect() {
    mongoose.connect(
      `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_URL}`,
      (err) => {
        if (err) {
          console.error("mongodb connection error", err);
        }
        console.log("mongodb connected");
      }
    );
  }
  connect();
  mongoose.connection.on("disconnected", connect);
};
