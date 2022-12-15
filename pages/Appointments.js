import styled from "styled-components";
// import { AppointmentCard } from "../components/AppointmentCard.js";
import AppointmentCard from "../components/AppointmentCard.js";
import { appointmentData } from "../lib/appointmentData.js";

export default function Homepage() {
  return (
    <>
      <Headline>Appointments</Headline>

      <BodyWrapper>
        <AppointmentGrid>
          {appointmentData.map((appointment) => (
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
    </>
  );
}

const Headline = styled.h1`
  top: 15px;
  margin: 0;
  height: 40px;
  width: 100vw;
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  justify-content: center;
  display: flex;
  position: fixed;
  color: #030303;
  font-family: Abel;
`;

const BodyWrapper = styled.section`
  display: grid;
  grid-template-rows: min-content auto 50px;
  height: inherit;
`;

const AppointmentGrid = styled.ul`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  align-content: start;
  margin: 0;
  padding: 10px;
  overflow-y: auto;
  color: #8a8a8f;

  margin-top: 40px;
`;
