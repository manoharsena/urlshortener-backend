import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const mongoDBURL = process.env.DBCONNECTIONSTRING;

const ConnectDB = async () => {
  try {
    const connection = await mongoose.connect(mongoDBURL);
    console.log("Database connected successfully......");
  } catch (error) {
    console.log(error);
  }
};

export default ConnectDB;
