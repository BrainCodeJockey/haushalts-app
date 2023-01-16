import GlobalStyles from "../components/GlobalStyles/GlobalStyles";
import { useLocalStorage } from "../helpers/hooks";

function MyApp({ Component, pageProps }) {
  const [appointmentList, setAppointmentList] = useLocalStorage(
    "appointmentList",
    []
  );

  function handleAddAppointment(newAppointment) {
    setAppointmentList([newAppointment, ...appointmentList]);
  }

  function handleRemoveAppointment(id) {
    const updatedAppointmentList = appointmentList.filter((appointment) => {
      return appointment.id !== id;
    });
    setAppointmentList([...updatedAppointmentList]);
  }

  function handleUpdateAppointment(editedAppointment) {
    setAppointmentList(
      appointmentList.map((Appointment) => {
        if (Appointment.id === editedAppointment.id) {
          return editedAppointment;
        } else {
          return Appointment;
        }
      })
    );
    setAppointmentList([...appointmentList]);
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
          handleUpdateAppointment={handleUpdateAppointment}
          handleRemoveAppointment={handleRemoveAppointment}
          onUpdateAppointmentList={handleUpdateAppointmentList}
          appointmentList={appointmentList}
        />
      </main>
    </>
  );
}

export default MyApp;
