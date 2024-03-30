import mongoose from "mongoose";

const ConnectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGODB_URI!, {
    
    });
    console.log("Connected to MongoDB 😃😃😃😃");
  } catch (error:any) {
    console.error("Error connecting to MongoDB:", error.message);
    // Optionally, you could re-throw the error to propagate it further
    throw error;
  }
};

export default ConnectDB;
