import Habit from "../models/habit.model.js";
import mongoose from "mongoose";

export const getHabits = async (req, res) => {
  res.status(200).json({ success: true, message: "reading book and coding" });
};
