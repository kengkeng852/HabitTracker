import mongoose from "mongoose";

const habitLogSchema = new mongoose.Schema(
  {
    habitId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Habit",
      index: true,
      required: true,
    },
    date: { type: String, required: true },
    completed: { type: Boolean, default: true },
  },
  { timestamps: true }
);
habitLogSchema.index({ habitId: 1, date: 1 }, { unique: true });

const habitLog = mongoose.model("HabitLog", habitLogSchema);

export default habitLog;
