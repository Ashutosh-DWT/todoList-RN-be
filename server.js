import { app } from "./app.js";
import dotenv from "dotenv";
import { connectDB } from "./config/database.js";
import cloudinary from "cloudinary";
import path from "path"

dotenv.config();
cloudinary.v2.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});
connectDB();

app.listen(process.env.PORT, () => {
  console.log("Server is running at port " + process.env.PORT);
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/views/index.html"));
});
