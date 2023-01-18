import { useEffect, useState } from "react";
import GlobalStyles from "../components/GlobalStyles/GlobalStyles";
import { getAppointment } from "../lib/fetch";

function MyApp({ Component, pageProps }) {
  const [appointmentList, setAppointmentList] = useState([]);

  // METHOD "GET"
  useEffect(() => {
    async function fetchAppointment() {
      const AppointmentsfromDataBase = await getAppointment();
      setAppointmentList(AppointmentsfromDataBase);
    }

    fetchAppointment();
  }, []);

  // METHOD "POST"
  async function handleAddAppointment(newAppointment) {
    await fetch("/api/Appointment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newAppointment),
    });

    async function fetchAppointment() {
      const AppointmentsfromDataBase = await getAppointment();
      setAppointmentList(AppointmentsfromDataBase);
    }

    fetchAppointment();
  }
  // METHOD "DELETE"
  async function handleRemoveAppointment(id) {
    if (confirm("Sind sie sicher, den Termin zu löschen?")) {
      await fetch("/api/Appointment/" + id, {
        method: "DELETE",
      });
      async function fetchAppointment() {
        const AppointmentsfromDataBase = await getAppointment();
        setAppointmentList(AppointmentsfromDataBase);
      }
      fetchAppointment();
    }
  }

  // Update Appointment
  async function handleUpdateAppointment(editedAppointment, id) {
    await fetch("/api/Appointment/" + id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editedAppointment),
    });

    async function fetchAppointment() {
      const AppointmentsfromDataBase = await getAppointment();
      setAppointmentList(AppointmentsfromDataBase);
    }

    fetchAppointment();
  }

  function handleUpdateAppointmentList(appointments) {
    setAppointmentList(appointments);
  }

  return (
    <>
      <main>
        <GlobalStyles />
        <Component
          {...pageProps}
          onAddAppointment={handleAddAppointment}
          handleRemoveAppointment={handleRemoveAppointment}
          onUpdateAppointmentList={handleUpdateAppointment}
          appointmentList={appointmentList}
        />
      </main>
    </>
  );
}

export default MyApp;
