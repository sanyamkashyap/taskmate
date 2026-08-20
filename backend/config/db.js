import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export async function connectDB() {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("Database connected");
  } catch (err) {
    console.log(err.message);
    process.exit();
  }
}

process.on("SIGINT", async () => {
  await mongoose.disconnect();
  console.log("client disconnected");
  process.exit(0);
});
