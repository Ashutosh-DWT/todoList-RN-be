import { app } from "./app.js";
import { config } from "dotenv";
import { connectDB } from "./config/database.js";
import cloudinary from "cloudinary";

// config({
//   path: "./.env",
// });
cloudinary.v2.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});
connectDB();

app.listen(process.env.PORT, () => {
  console.log("Server is running at port " + process.env.PORT);
});
