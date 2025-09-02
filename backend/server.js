import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./lib/db.js";
import cookieParser from "cookie-parser";
import habitRoutes from "./routes/habit.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cookieParser());
app.use(express.json());

app.use("/api/habit", habitRoutes);

app.listen(PORT, () => {
  console.log("Server is running on port http://localhost:" + PORT);
  connectDB();
});
