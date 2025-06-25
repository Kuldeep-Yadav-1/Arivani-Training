import mongoose from "mongoose";

const MONGODB_URL =
  "mongodb+srv://kulyad123:jVNAePzb8K3i3xFC@kuldeep.jawgneh.mongodb.net/book_store?retryWrites=true&w=majority&appName=Kuldeep";

export const connectMongoDB = async () => {
  try {
    if (MONGODB_URL) {
      await mongoose.connect(MONGODB_URL);
      console.log("Database Connected");
    }
  } catch (error) {
    console.log(error);
  }
};
