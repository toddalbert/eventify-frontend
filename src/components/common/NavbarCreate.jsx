import React from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobilIcon,
  NavMenu,
  NavItem,
  NavBtn,
  NavLinks,
  NavBntLink,
} from "./NavbarCss";

const NavbarCreate = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">Eventify</NavLogo>
          <MobilIcon>
            <FaBars />
          </MobilIcon>
          <NavMenu>
            <NavItem>
              <NavLinks>Create Event</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBntLink to="/eventList">Events List</NavBntLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default NavbarCreate;
