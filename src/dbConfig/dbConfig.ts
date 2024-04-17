import mongoose from "mongoose";

export async function connectToDatabase() {
  const uri = process.env.MONGODB_URI || "";
  try {
    await mongoose.connect(uri);  
    const connection = mongoose.connection;
    connection.on("error", console.error.bind(console, "connection error:"));
    connection.once("open", () => {
      console.log("Connected to the database");
    });
    
    console.log("Connected to the database");
  } catch (error) {
    console.log("Error connecting to the database");
    console.error(error);
  }
}
