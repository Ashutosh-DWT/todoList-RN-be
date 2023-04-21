import express from "express";
import User from "./routers/User.js";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/database.js";
import cloudinary from "cloudinary";

export const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true , limit: "100mb"}));
app.use(cookieParser());
app.use("/", User);
app.use(
  fileUpload({
    limits: { fileSize: 500 * 1024 * 1024 },
    useTempFiles: true,
  })
);
app.use(cors());

app.get("/", (req, res) => {
  res.send("server running successfully!");
});



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