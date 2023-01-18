import dbConnect from "../../../db/dbConnect";
import Appointment from "../../../db/models/Appointment";

export default async function handler(req, res) {
  await dbConnect();

  const { id } = req.query;
  const { method } = req;

  if (method === "GET") {
    // Read Appointment by ID
    try {
      const appointment = await Appointment.findById(id); // this is a mongoose collection
      // Display Appointment as JSON object in Browser
      res.status(200).json(appointment);
    } catch (error) {
      res.status(400).json("Something went wrong", { error });
      res.status(404).json("ID not found", { error });
    }
  }

  if (method === "DELETE") {
    try {
      await Appointment.findByIdAndDelete(id);
      return res
        .status(200)
        .json({ message: "Appointment is deleted permanently" });
    } catch {
      return res
        .status(404)
        .json({ message: "Appointment to delete couldn't be found" });
    }
  }

  if (method === "PUT") {
    try {
      const result = await Appointment.findByIdAndUpdate(id, req.body, {
        returnDocument: "after",
      });
      return res.status(200).json(result);
    } catch {
      return res.status(404).json({ message: "Appointment couldn't be found" });
    }
  }

  res.status(405).json({ message: "method not allowed" });
}
