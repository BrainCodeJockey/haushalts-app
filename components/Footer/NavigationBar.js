import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import AddNewImg from "../../assets/svgs/NavigationBar/AddNew.svg";
import AddNewFilledImg from "../../assets/svgs/NavigationBar/AddNewFilled.svg";
import AppointmentsImg from "../../assets/svgs/NavigationBar/Appointments.svg";
import AppointmentsFilledImg from "../../assets/svgs/NavigationBar/AppointmentsFilled.svg";
import HomeImg from "../../assets/svgs/NavigationBar/Home.svg";
import HomeFilledImg from "../../assets/svgs/NavigationBar/HomeFilled.svg";
import CalendarImg from "../../assets/svgs/NavigationBar/Calendar.svg";
import CalendarFilledImg from "../../assets/svgs/NavigationBar/CalendarFilled.svg";

const StyledImage = styled(Image)``;

export function NavigationBar() {
  const { pathname } = useRouter();

  const navLinks = [
    {
      href: "/",
      img: pathname === "/" ? HomeFilledImg : HomeImg,
      alt: "Home Icon",
    },

    {
      href: "/CalendarPage",
      img: pathname === "/CalendarPage" ? CalendarFilledImg : CalendarImg,
      alt: "Calendar Icon",
    },

    {
      href: "/AddNewPage",
      img: pathname === "/AddNewPage" ? AddNewFilledImg : AddNewImg,
      alt: "AddNew Icon",
    },

    {
      href: "/AppointmentsPage",
      img:
        pathname === "/AppointmentsPage"
          ? AppointmentsFilledImg
          : AppointmentsImg,
      alt: "Appointments Icon",
    },
  ];

  return (
    <Navbar>
      <NavList>
        {navLinks.map(({ href, img, alt }) => (
          <Link key={href} href={href}>
            <StyledImage src={img} alt={alt} width={60} height={60} priority />
          </Link>
        ))}
      </NavList>
    </Navbar>
  );
}

const Navbar = styled.nav`
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 100;
  background-color: white;
  margin-top: 10px;
`;

const NavList = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  margin: 1px;
  padding: 25px;
  width: 100%;
  height: 5vh;
`;
