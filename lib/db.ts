import mongoose from "mongoose";

const ConnectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGODB_URI!);
  } catch (error) {
    console.log("Error: ", error);
  }
};

export default ConnectDB;
