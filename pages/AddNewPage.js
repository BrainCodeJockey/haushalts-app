import styled from "styled-components";
import { NavigationBar } from "../components/Footer/NavigationBar.js";
import AddNewForm from "../components/AddNew/AddNewForm.js";
import useLocalStorageState from "use-local-storage-state";
import Image from "next/image";
import ProfilImage from "../assets/svgs/Profil/ProfilImage.svg";

export default function AddNewPage() {
  const [appointmentList, setAppointmentList] =
    useLocalStorageState("appointmentList");

  function addAppointment(newAppointment) {
    setAppointmentList([newAppointment, ...appointmentList]);
  }

  return (
    <>
      <StyledHeadlineContainer>
        <StyledProfileImage
          src={ProfilImage}
          alt="Profil"
          width={60}
          height={60}
        />
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

const StyledProfileImage = styled(Image)`
  border-radius: 50%;
  background-size: cover;
  background-position: center;
  background-color: grey;
  margin-top: 10px;
  margin-left: 20px;
`;
