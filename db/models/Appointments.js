import mongoose from "mongoose";

const { Schema } = new Schema({
  name: { type: String, required: true },
});

const Appointment =
  mongoose.models.Question || mongoose.model("Appointment", Schema);

export default Appointment;
