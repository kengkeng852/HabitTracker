import mongoose from "mongoose";

const habitSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", index: true, required: true },
    name: { type: String, required: true },
    description: String,
    color: String,
    archived: { type: Boolean, default: false },
    schedule: {
      type: String,
      enum: ["daily"],
      default: "daily",
    },
  },
  { timestamps: true }
);

const Habit = mongoose.model("Habit", habitSchema);

export default Habit;
