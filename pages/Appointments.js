import { useState } from "react";

import styled from "styled-components";
import AppointmentCard from "../components/AppointmentCard";

import { Abel } from "@next/font/google";

const abel = Abel({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  const [cardList, setCardList] = useState([]);

  return (
    <>
      <Headline className={abel.className}>Appointments</Headline>

      <Wrapper>
        <AppointmentGrid className={abel.className}>
          <AppointmentCard
            name="Alex"
            green="Putz"
            text="Treppenhaus"
            date="13.12.2022"
            clock="14:00"
          />
          <AppointmentCard
            name="Simone"
            green="Putz"
            text="Treppenhaus"
            date="13.12.2022"
            clock="12:00"
          />
          <AppointmentCard
            name="Sebastian"
            green="Putz"
            text="Treppenhaus2"
            date="14.12.2022"
            clock="13:00"
          />
          <AppointmentCard
            name="Michael"
            green="Putz"
            text="Mülltonne"
            date="15.12.2022"
            clock="12:00"
          />
          {cardList.map((card) => {
            return (
              <Card
                key={card.id}
                name={card.name}
                green={card.green}
                text={card.text}
                date={card.date}
                clock={card.clock}
                id={card.id}
              />
            );
          })}
        </AppointmentGrid>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.section`
  display: grid;
  grid-template-rows: min-content auto 50px;
  height: 100vh;
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
`;
