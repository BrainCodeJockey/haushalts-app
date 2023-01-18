import mongoose from "mongoose";

const { Schema } = mongoose;

//Blaupause
const appointmentSchema = new Schema({
  text: { type: String, required: true },
  name: { type: String, required: true },
  date: { type: String, required: true },
  clock: { type: String, required: true },
});

//Question wird in der Datenbank gespeichert und erlaubt uns die CRUD-Operationen
const Appointment =
  mongoose.models.Appointment ||
  mongoose.model("Appointment", appointmentSchema);

export default Appointment;
