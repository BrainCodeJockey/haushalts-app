import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import AddNewImg from "../../assets/svgs/NavigationBar/AddNew.svg";
import AddNewFilledImg from "../../assets/svgs/NavigationBar/AddNewFilled.svg";
import AppointmentsImg from "../../assets/svgs/NavigationBar/Appointments.svg";
import AppointmentsFilledImg from "../../assets/svgs/NavigationBar/AppointmentsFilled.svg";

const StyledAddNew = styled(Image)``;
const StyledAppointments = styled(Image)``;

//Funktion

export function NavigationBar() {
  const { pathname } = useRouter();
  const navLinks = [
    {
      href: "/AddNewPage",
      img: pathname === "/AddNew" ? AddNewFilledImg : AddNewImg,
      alt: "AddNew Icon",
    },
    {
      href: "/AppointmentsPage",
      img:
        pathname === "/Appointments" ? AppointmentsFilledImg : AppointmentsImg,
      alt: "Appointments Icon",
    },
  ];

  return (
    <Navbar>
      <NavList>
        {navLinks.map(({ href, img, alt }) => (
          <Link key={href} href={href}>
            {pathname === href ? (
              <StyledAppointments
                src={img}
                alt={alt}
                width={60}
                height={60}
                priority
              />
            ) : (
              <StyledAddNew
                src={img}
                alt={alt}
                width={60}
                height={60}
                priority
              />
            )}
          </Link>
        ))}
      </NavList>
    </Navbar>
  );
}

export const Navbar = styled.nav`
  position: fixed;
  bottom: 0;
  width: 100%;
`;

const NavList = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  margin: 0px;
  padding: 25px;
  width: 100%;
  height: 5vh;
`;
