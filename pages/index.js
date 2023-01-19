import styled from "styled-components";
import { NavigationBar } from "../components/Footer/NavigationBar.js";
import Image from "next/image";
import ProfilImage from "../assets/svgs/Profil/ProfilImage.svg";
import HomeImage from "../assets/svgs/Home/HomeImage.svg";

export default function Home() {
  return (
    <StyledContainer>
      <StyledHeadlineContainer>
        <StyledHeadline>Hallo Wohngemeinschaft</StyledHeadline>
        <StyledProfileImage
          src={ProfilImage}
          alt="Profil"
          width={60}
          height={60}
        />
      </StyledHeadlineContainer>

      <StyledHomeImage src={HomeImage} alt="Home" width={1127} height={555} />

      <NavigationBar />
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledHeadlineContainer = styled.div`
  display: flex;
  align-items: center;
`;

const StyledHeadline = styled.h1`
  margin: 0;
  font-size: 20px;
  color: var(--color-font-headline);
  font-family: Abel;
  position: fixed;
  width: 90%;
  z-index: 1;
  margin-top: 15px;
  letter-spacing: 1.5px;
`;

const StyledProfileImage = styled(Image)`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-size: cover;
  background-position: center;
  background-color: grey;
  margin: 10px 0 0 250px;
`;

const StyledHomeImage = styled(Image)`
  width: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
`;
