import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
  if (isConnected) {
    console.log("Already connected to DB.");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI);
    isConnected = true
    console.log("MongoDB connected.");
  } catch (err) {
    console.log(err);
  }
};
