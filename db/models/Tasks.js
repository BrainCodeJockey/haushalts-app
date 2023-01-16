import mongoose from "mongoose";

//Blaupause
const { Schema } = new Schema({
  text: { type: String, required: true },
  name: { type: String, required: true },
  date: { type: String, required: true },
  clock: { type: String, required: true },
});

//Question wird in der Datenbank gespeichert und erlaubt uns die CRUD-Operationen
const Appointment =
  mongoose.model.Appointment ||
  mongoose.model("Appointment", appointmentSchema);

export default Appointment;
