import React from "react";
import styled from "styled-components";
import NavBtn from "./NavBtn";

const NavBar = () => {
  return (
    <Nav className="navbar navbar-expand-lg navbar-light bg-light">
      <img src="./images/Logo.png" className="navbar-brand" href="#" />
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <div className="ms-auto">
          <NavBtn text="Book Now" variant="book" />
          <NavBtn text="Contact Us" variant="contact" />
        </div>
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
  Button:hover {
    cursor: pointer;
  }
`;

export default NavBar;
