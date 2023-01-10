import React from "react";
import { CalendarFromReact } from "../components/Calendar/Calendar.js";
import { NavigationBar } from "../components/Footer/NavigationBar";
import styled from "styled-components";

export default function CalendarPage({ appointmentList }) {
  console.log(appointmentList);
  return (
    <StyledBody>
      <CalendarFromReact appointmentList={appointmentList} />
      <NavigationBar />
    </StyledBody>
  );
}

const StyledBody = styled.section`
  display: flex;
  flex-direction: column;
  height: inherit;
  background-color: white;
  height: 100vh;
`;
