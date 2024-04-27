import React, { useState } from "react";
import styled from "styled-components";
import NavBtn from "./NavBtn";

const NavBar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <Nav className="navbar navbar-expand-lg navbar-light bg-light">
      <img src="./images/Logo.png" className="navbar-brand" href="#" />
      <button
        className="navbar-toggler"
        type="button"
        onClick={toggleNav}
        aria-expanded={isNavOpen ? "true" : "false"}
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div
        className={`burger-btns collapse navbar-collapse ${
          isNavOpen ? "show" : ""
        }`}
      >
        <NavBtnWrapper className="ms-auto">
          <NavBtn text="Book Now" variant="book" />
          <NavBtn text="Contact Us" variant="contact" />
        </NavBtnWrapper>
      </div>
    </Nav>
  );
};

const Nav = styled.div`
  overflow: auto;
  background-color: white;
  justify-content: space-between;
  align-items: center;
  padding: 20px 75px;
  display: flex;
  box-shadow: 4px 4px 20px -6px #d4d4d4;
  img {
    width: 127px;
  }
  @media screen and (max-width: 500px) {
    padding: 20px 10px;
  }
  @media screen and (max-width: 390px) {
    padding: 20px 10px;
  }
  button {
    transition: transform 0.1s;
  }
  button:hover {
    cursor: pointer;
    transform: scale(0.9);
  }
  img:hover {
    cursor: pointer;
  }
`;

const NavBtnWrapper = styled.div`
  /* @media screen and (max-width: 991px) {
    margin-top: 10px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  } */
`;

export default NavBar;
