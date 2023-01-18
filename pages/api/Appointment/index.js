import dbConnect from "../../../db/dbConnect";
import Appointment from "../../../db/models/Appointment.js";

export default async function handler(req, res) {
  //1. Connect to the database
  await dbConnect();

  if (req.method === "GET") {
    // 2. Read data from database (async! use await!)
    try {
      const appointments = await Appointment.find(); // this is a mongoose collection

      // 3. Translate collection to array
      const appointmentsArray = appointments.map((appointment) => {
        return {
          id: appointment._id,
          text: appointment.text,
          name: appointment.name,
          date: appointment.date,
          clock: appointment.clock,
        };
      });
      res.status(200).json(appointmentsArray);
    } catch (error) {
      res.status(400).json({ message: "Something went wrong" }, { error });
    }
    return;
  }

  // 4. Create a new Appointment
  if (req.method === "POST") {
    const data = req.body;
    try {
      const newAppointment = await Appointment.create(data);
      res.status(201).json(newAppointment);
    } catch (error) {
      res.status(400).json({ message: "error" });
    }
    return;
  }

  res.status(405).json({ message: "method not allowed" });
}
