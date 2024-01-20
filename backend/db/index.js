import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

const connectDB = async () => {
  try {
    // console.log(DB_NAME, process.env.MONGODB_URI);
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      `\n MongoDB connected !! DB HOST:  ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log(error.message);
  }
};

export default connectDB;
