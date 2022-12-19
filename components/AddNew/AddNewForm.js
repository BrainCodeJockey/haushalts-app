import { nanoid } from "nanoid";
import styled from "styled-components";
// import format from "date-fns/format";

//Symbol
import { BsPlusCircleFill } from "react-icons/bs";

// Funktion

export default function AddNewForm({ onAddAppointment }) {
  function handleSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const text = form.text.value;
    const name = form.name.value;
    const date = form.date.value;
    // const date = format(Date(form.date.value), "dd'.'MM'.'yyyy");
    const clock = form.clock.value;

    const newAppointment = {
      id: nanoid(),
      text: text,
      name: name,
      date: date,
      clock: clock,
    };

    onAddAppointment(newAppointment);

    form.reset();
  }

  return (
    <>
      <StyledEditForm onSubmit={handleSubmit}>
        <InputWrapper>
          <label htmlFor="text">
            <ScreenReaderOnly>TEXT</ScreenReaderOnly>
          </label>
          <input placeholder={`TEXT`} name="text" id="text" />

          <label htmlFor="name">
            <ScreenReaderOnly>NAME</ScreenReaderOnly>
          </label>
          <input placeholder={`NAME`} name="name" id="name" />

          <label htmlFor="date">
            <ScreenReaderOnly>DATE</ScreenReaderOnly>
          </label>
          <input placeholder={`Date`} name="date" id="date" />

          <label htmlFor="clock">
            <ScreenReaderOnly>Clock</ScreenReaderOnly>
          </label>
          <input placeholder={`Clock`} name="clock" id="clock" />
        </InputWrapper>

        <StyledButton>
          <BsPlusCircleFill aria-hidden="true" />
        </StyledButton>
      </StyledEditForm>
    </>
  );
}

//Styles

const StyledEditForm = styled.form`
  display: grid;
  border-bottom: 1px solid #dadada;
  margin: 2px 5px 2px 5px;
  align-items: center;
  text-align: center;
`;

const InputWrapper = styled.div`
  grid-template-columns: 1.8fr 2fr 5fr;
  grid-template-rows: 1fr 1fr;
  align-content: space-between;
  margin: 2px 5px 2px 5px;
  padding: 5px;
`;

const ScreenReaderOnly = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
`;

const StyledButton = styled.button`
  width: 90%;
  background-color: var(--color-button);
  padding: 5px;
  margin: 10px;
  align-items: center;
  text-align: center;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
`;
