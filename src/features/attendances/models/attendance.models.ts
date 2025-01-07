import { Schema, model } from "mongoose";
import { IAttendance } from "./attendance.interfaces";

const AttendanceSchema = new Schema<IAttendance>(
  {
    studentId: { type: String, required: true, ref: "User" },
    laboratoryId: { type: String, required: true, ref: "Laboratory" },
    type: { type: String, enum: ["check-in", "check-out"], required: true },
    method: { type: String, enum: ["qr", "manual"], required: true },
    status: {
      type: String,
      enum: ["valid", "invalid", "pending"],
      default: "pending",
    },
  },
  {
    timestamps: true,
  }
);

export default model<IAttendance>("Attendance", AttendanceSchema);
