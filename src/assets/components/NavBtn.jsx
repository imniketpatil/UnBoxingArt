import React from "react";
import styled from "styled-components";

const NavBtn = (props) => {
  return <Button variant={props.variant}>{props.text}</Button>;
};

const Button = styled.button`
  background-color: ${(props) =>
    props.variant === "book" ? "#f7567c" : "#fff"};
  border: ${(props) =>
    props.variant === "book" ? "none" : "2px solid #f7567c"};
  color: ${(props) => (props.variant === "book" ? "white" : "#f7567c")};
  border-radius: 26px;
  padding: 8px 50px 12px;
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  font-weight: 500;
  margin: 0 0.2rem 0 0.2rem;
  /* margin-left: ${(props) => (props.variant === "contact" ? "24px" : "0")}; */
`;

export default NavBtn;
