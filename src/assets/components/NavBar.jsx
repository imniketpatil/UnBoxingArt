import React from "react";
import styled from "styled-components";
import NavBtn from "./NavBtn";

const NavBar = () => {
  return (
    <Nav>
      <img src="./images/Logo.png" alt="Logo" />
      <div>
        <NavBtn text="Book Now" variant="book" />
        <NavBtn text="Contact Us" variant="contact" />
      </div>
    </Nav>
  );
};

const Nav = styled.div`
  background-color: rgba(0, 0, 0, 0);
  justify-content: space-between;
  align-items: center;
  padding: 20px 75px;
  display: flex;
  box-shadow: 4px 4px 20px -6px #d4d4d4;
  img {
    width: 127px;
  }
  Button:hover {
    cursor: pointer;
  }
`;

export default NavBar;
