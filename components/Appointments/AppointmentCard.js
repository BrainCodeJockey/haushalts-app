import { useState, useEffect } from "react";
import {
  AiFillEdit,
  AiFillCheckCircle,
  AiOutlineClockCircle,
} from "react-icons/ai";
import { RiDeleteBinLine } from "react-icons/ri";
import styled from "styled-components";
import format from "date-fns/format";

export default function AppointmentCard({
  date,
  name,
  text,
  clock,
  green,
  id,
  handleRemoveAppointment,
  onUpdateAppointmentList,
  appointmentList,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ date, name, text, clock });

  useEffect(() => {
    setFormData(appointmentList.find((appointment) => appointment.id === id));
  }, [id]);

  const handleEdit = () => setIsEditing(true);
  const handleSave = () => {
    setIsEditing(false);
    const updatedAppointmentList = appointmentList.map((appointment) =>
      appointment.id === id ? formData : appointment
    );

    onUpdateAppointmentList(updatedAppointmentList);
  };

  return (
    <StyledAppointmentCard>
      {isEditing ? (
        <>
          <StyledEditForm>
            <input
              value={formData.text}
              onChange={(e) =>
                setFormData({ ...formData, text: e.target.value })
              }
            />
            <input
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
            <input
              placeholder="Date"
              name="date"
              type="date"
              id="date"
              aria-label="Date"
              value={format(new Date(formData.date), "yyyy-MM-dd")}
              onChange={(e) => {
                setFormData({
                  ...formData,
                  date: e.target.value,
                });
              }}
            />

            <input
              placeholder="Time"
              name="clock"
              type="time"
              id="clock"
              aria-label="Time"
              value={formData.clock}
              onChange={(e) => {
                setFormData({ ...formData, clock: e.target.value });
              }}
            />
          </StyledEditForm>
          <StyledCeckButton>
            <AiFillCheckCircle onClick={handleSave} />
          </StyledCeckButton>
        </>
      ) : (
        <>
          <StyledForm>
            <StyledGreen>{green}</StyledGreen>
            <StyledText>{text}</StyledText>
            <StyledName>{name}</StyledName>
            <AiOutlineClockCircle size="1rem" color="grey" />
            <StyledDate>{format(new Date(date), "dd'.'MM'.'yyyy")}</StyledDate>
            <StyledClock>{clock}</StyledClock>
            <StyledRemoveButton onClick={() => handleRemoveAppointment(id)}>
              <RiDeleteBinLine />
            </StyledRemoveButton>
            <StyledEditButton>
              <AiFillEdit onClick={handleEdit} />
            </StyledEditButton>
          </StyledForm>
        </>
      )}
    </StyledAppointmentCard>
  );
}

const StyledAppointmentCard = styled.li`
  display: inline;
  background-color: white;
`;

const StyledEditForm = styled.li`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  align-content: space-between;
  background-color: white;
  margin: 5px 5px 5px 5px;
  padding: 1px;
  width: 90%;
`;

const StyledCeckButton = styled.button`
  width: 90%;
  color: green;
  padding: 5px;
  margin: 5px;
  align-items: center;
  text-align: center;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
`;

const StyledForm = styled.li`
  display: grid;
  grid-template-columns: 1.8fr 2fr 5fr;
  grid-template-rows: 1fr 0.8fr 0.5fr;
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

const StyledEditButton = styled.span`
  display: flex;
  align-items: center;
  color: #778899;
  cursor: pointer;
`;

const StyledRemoveButton = styled.span`
  display: flex;
  align-items: center;
  color: #fe4b13;
  cursor: pointer;
`;
