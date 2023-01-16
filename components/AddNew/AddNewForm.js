import { nanoid } from "nanoid";
import styled from "styled-components";

export default function AddNewForm({ onAddAppointment }) {
  function handleSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const text = form.text.value;
    const name = form.name.value;
    const date = form.date.value;
    const clock = form.clock.value;

    if (confirm("Möchten sie einen neuen Termin hinzufügen?")) {
      const newAppointment = {
        id: nanoid(),
        text,
        name,
        date,
        clock,
      };

      onAddAppointment(newAppointment);

      form.reset();
    }
  }

  return (
    <>
      <StyledEditForm onSubmit={handleSubmit}>
        <StyledInput>
          <input
            placeholder="was wird geputzt..."
            name="text"
            id="text"
            aria-label="Task"
          />

          <input
            placeholder="Name eingeben..."
            name="name"
            id="name"
            aria-label="Name"
          />

          <input
            placeholder="Date"
            name="date"
            type="date"
            id="date"
            aria-label="Date"
          />

          <input
            placeholder="Time"
            name="clock"
            type="time"
            id="clock"
            aria-label="Time"
          />
        </StyledInput>
        <StyledButton>Termin Hinzufügen</StyledButton>
      </StyledEditForm>
    </>
  );
}

const StyledEditForm = styled.form`
  width: 100%;
  display: grid;
  border-bottom: 1px solid #dadada;
  margin: 5px 5px 5px 5px;
  align-items: center;
  text-align: center;
  justify-content: center;
  align-content: center;
`;

const StyledInput = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-column-gap: 10px;
  align-content: space-between;
  margin: 2px 2px 2px 2px;
  padding: 5px;
  width: 100%;

  input {
    width: 100%;
    margin-bottom: 10px;
  }
`;

const StyledButton = styled.button`
  width: 100%;
  background-color: var(--color-button);
  padding: 5px;
  margin: 5px;
  align-items: center;
  text-align: center;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
`;
