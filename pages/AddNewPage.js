import styled from "styled-components";
import { NavigationBar } from "../components/Footer/NavigationBar.js";
import AddNewForm from "../components/AddNew/AddNewForm.js";
import useLocalStorageState from "use-local-storage-state";

export default function AddNewPage() {
  const [appointmentList, setAppointmentList] =
    useLocalStorageState("appointmentList");

  function addAppointment(newAppointment) {
    setAppointmentList([newAppointment, ...appointmentList]);
  }

  return (
    <>
      <StyledHeadlineContainer>
        <StyledProfileImage />
        <StyledHeadline>Hej Alex!</StyledHeadline>
      </StyledHeadlineContainer>
      <AddNewForm onAddAppointment={addAppointment} />
      <NavigationBar />
    </>
  );
}

const StyledHeadlineContainer = styled.div`
  display: flex;
  align-items: center;
`;

const StyledHeadline = styled.h1`
  margin: 0;
  font-size: 17px;
  color: var(--color-font-headline);
  font-family: Abel;
  position: fixed;
  width: 100%;
  z-index: 1;
  margin-top: 15px;
  margin-left: 100px;
`;

const StyledProfileImage = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-image: url("/assets/svgs/Profil/ProfilImage.svg");
  background-size: cover;
  background-position: center;
  background-color: grey;
  margin-top: 10px;
  margin-left: 20px;
`;
