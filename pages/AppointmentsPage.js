import styled from "styled-components";
import AppointmentCard from "../components/Appointments/AppointmentCard.js";
import { appointmentData } from "../lib/appointmentData.js";
import { NavigationBar } from "../components/Footer/NavigationBar.js";
import useLocalStorageState from "use-local-storage-state";

export default function AppointmentsPage() {
  const [appointmentList, setAppointmentList] = useLocalStorageState(
    "appointmentList",
    { defaultValue: appointmentData }
  );

  return (
    <>
      <Headline>Appointments</Headline>

      <BodyWrapper>
        <AppointmentGrid>
          {appointmentList.map((appointment) => (
            <AppointmentCard
              key={appointment.id}
              name={appointment.name}
              green={appointment.green}
              text={appointment.text}
              date={appointment.date}
              clock={appointment.clock}
            />
          ))}
        </AppointmentGrid>
      </BodyWrapper>

      <NavigationBar />
    </>
  );
}

const Headline = styled.h1`
  margin: 0;
  font-size: 17px;
  color: var(--color-font-headline);
  font-family: Abel;
  position: fixed;
  width: 100%;
  text-align: center;
  z-index: 1;
  margin-top: 15px;
`;

const BodyWrapper = styled.section`
  display: grid;
  grid-template-rows: min-content auto 50px;
  height: inherit;
  padding-top: 50px;
`;

const AppointmentGrid = styled.ul`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  color: var(--color-font);
`;
