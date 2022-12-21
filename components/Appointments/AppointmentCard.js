import { AiOutlineClockCircle } from "react-icons/ai";
import styled from "styled-components";

export default function AppointmentCard({ date, name, text, clock, green }) {
  return (
    <StyledAppointmentCard>
      <StyledGreen>{green}</StyledGreen>
      <StyledText>{text}</StyledText>
      <StyledName>{name}</StyledName>
      <AiOutlineClockCircle size="1rem" color="grey" />
      <StyledDate>{date}</StyledDate>
      <StyledClock>{clock}</StyledClock>
    </StyledAppointmentCard>
  );
}

const StyledAppointmentCard = styled.li`
  display: grid;
  grid-template-columns: 1.8fr 2fr 5fr;
  grid-template-rows: 1fr 1fr;
  align-content: space-between;
  background-color: white;
  border-bottom: 1.6px solid #dadada;
  margin: 2px 10px 2px 0px;
  padding: 1px;
`;

const StyledName = styled.p`
  color: var(--color-font);
  float: right;
  font-size: 0.8em;
  margin-right: 0;
  text-align: right;
`;

const StyledGreen = styled.p`
  background-color: var(--color-background-object);
  border-radius: 10px;
  color: white;
  float: left;
  font-size: 0.8em;
  margin-right: 10px;
  padding: 0.2px;
  text-align: center;
`;

const StyledText = styled.p`
  color: var(--color-font);
  float: left;
  font-size: 0.8em;
  text-align: left;
`;

const StyledDate = styled.div`
  color: var(--color-font);
  float: left;
  font-size: 0.8em;
`;

const StyledClock = styled.div`
  color: var(--color-font);
  border-left: 0;
  float: left;
  font-size: 0.8em;
`;
