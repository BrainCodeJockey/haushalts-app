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

  return (
    <>
      <main>
        <GlobalStyles />
        <Component
          {...pageProps}
          onAddAppointment={handleAddAppointment}
          appointmentList={appointmentList}
        />
      </main>
    </>
  );
}

export default MyApp;
