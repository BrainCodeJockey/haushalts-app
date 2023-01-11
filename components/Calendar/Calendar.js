import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import styled from "styled-components";

export function CalendarFromReact({ appointmentList }) {
  const [date, setDate] = useState(new Date());

  const filterAppointmentsByDate = (appointmentList, clickedDate) => {
    return appointmentList.filter((appointment) => {
      const appointmentDate = new Date(appointment.date);
      return appointmentDate.toDateString() === clickedDate.toDateString();
    });
  };

  const handleClickDay = (clickedDate) => {
    setDate(clickedDate);
  };

  const isAppointmentOnDate = (date) => {
    return appointmentList.some((appointment) => {
      const appointmentDate = new Date(appointment.date);
      return appointmentDate.toDateString() === date.toDateString();
    });
  };

  const tileContent = ({ date }) => {
    return isAppointmentOnDate(date) ? (
      // <button style={{ backgroundColor: "green" }} />
      <p>🧹</p>
    ) : null;
  };

  const selectedAppointments = filterAppointmentsByDate(appointmentList, date);
  return (
    <StyledCalendarContainer>
      <Calendar
        locale="de-DE"
        tileContent={tileContent}
        value={date}
        onClickDay={handleClickDay}
      />
      <StyledHeadline>Putztage an diesem Tag:</StyledHeadline>
      <StyledAppointments>
        {selectedAppointments.length > 0 ? (
          selectedAppointments.map((appointment, index) => (
            <div key={index}>
              <span>{appointment.name} </span>
              <span>{appointment.text} </span>
              <span>{appointment.date}</span>
            </div>
          ))
        ) : (
          <div>Keine Termine an diesem Tag</div>
        )}
      </StyledAppointments>
    </StyledCalendarContainer>
  );
}

const StyledHeadline = styled.h2`
  font-size: 1rem;
  background-color: #f5f5f5;
  padding: 1rem;
  text-align: center;
`;

const StyledAppointments = styled.span`
  /* display: grid;
  grid-template-columns: 1fr 1fr 1fr; */
  font-size: 1.1rem;
  text-align: center;
  position: relative;
  background-color: #f5f5f5;
  padding: 0rem;
  line-height: 1.5;
`;
const StyledCalendarContainer = styled.section`
  margin: 2rem;
  position: relative;
  button {
    margin: 2px;
    background-color: #e6e6ea;
    border-radius: 3px;
  }

  .react-calendar {
    border: none;
    border-radius: 4px;
    padding: 3px;
    box-shadow: 2px 2px 15px 2px #c4c4c4;
  }
  .react-calendar__month-view__days {
    display: grid !important;
    grid-template-columns: 14.2% 14.2% 14.2% 14.2% 14.2% 14.2% 14.2%;
  }
  .react-calendar__month-view__days__day--weekend {
    color: black;
  }
  .react-calendar__month-view__days__day--neighboringMonth {
    opacity: 0.7;
  }
  .react-calendar__tile--active {
    color: black;
  }
  .react-calendar__tile--active:enabled:hover {
    background: #fed766;
  }
  .react-calendar__year-view__months,
  .react-calendar__decade-view__years,
  .react-calendar__century-view__decades {
    display: grid !important;
    grid-template-columns: 20% 20% 20% 20% 20%;
    &.react-calendar__year-view__months {
      grid-template-columns: 33.3% 33.3% 33.3%;
    }
    .react-calendar__tile {
      max-width: initial !important;
    }
  }
  .MuiBadge-badge {
    position: absolute;
    top: -10px;
    right: -6px;
  }
`;
