import styled from "styled-components";
import AppointmentCard from "../components/Appointments/AppointmentCard";
import { NavigationBar } from "../components/Footer/NavigationBar";

export default function AppointmentsPage({
  appointmentList,
  handleRemoveAppointment,
  onUpdateAppointmentList,
}) {
  return (
    <StyledBody>
      <StyledHeadline>Appointments</StyledHeadline>

      <StyledGrid>
        {appointmentList.map(({ id, name, text, date, clock }) => (
          <AppointmentCard
            key={id}
            id={id}
            name={name}
            green="Putz"
            text={text}
            date={date}
            clock={clock}
            handleRemoveAppointment={handleRemoveAppointment}
            onUpdateAppointmentList={onUpdateAppointmentList}
            appointmentList={appointmentList}
          />
        ))}
      </StyledGrid>

      <NavigationBar />
    </StyledBody>
  );
}

const StyledHeadline = styled.h1`
  margin: 0;
  font-size: 17px;
  color: var(--color-font-headline);
  font-family: Abel;
  position: fixed;
  width: 100%;
  text-align: center;
  z-index: 100;
  padding-top: 15px;
  background-color: white;
  height: 10vh;
`;

const StyledBody = styled.section`
  display: flex;
  flex-direction: column;
  height: inherit;
  background-color: white;
  height: 5vh;
`;

const StyledGrid = styled.ul`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  color: var(--color-font);
  height: 5vh;
  padding-top: 10vh;
`;
