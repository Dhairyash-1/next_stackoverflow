import mongoose from "mongoose";

const isConnected: boolean = false;

export const connectToDatabase = async () => {
  mongoose.set("strictQuery", true);

  if (!process.env.MONGODB_URI) {
    return console.log("MONGODB URL IS MISSING");
  }

  if (isConnected) {
    return console.log("DATABASE is already connected");
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, { dbName: "devFlow" });
    console.log("DATABASE CONNECTED SUCCESSFULLY");
  } catch (error) {
    console.log("Failed to connect with database", error);
  }
};
