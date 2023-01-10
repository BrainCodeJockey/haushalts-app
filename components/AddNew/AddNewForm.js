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
  display: grid;
  border-bottom: 1px solid #dadada;
  margin: 2px 5px 2px 5px;
  align-items: center;
  text-align: center;
`;

const StyledInput = styled.div`
  grid-template-columns: 1.8fr 2fr 5fr;
  grid-template-rows: 1fr 1fr;
  align-content: space-between;
  margin: 2px 5px 2px 5px;
  padding: 5px;
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
