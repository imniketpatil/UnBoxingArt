import React from "react";
import styled from "styled-components";
const GetInTouch = () => {
  return (
    <Contact>
      <div className="bg-img">
        <div className="details">
          <h1>Would you like to host parties?</h1>
          <p>
            We are always looking for enthusiastic people to be a part of our
            team. Here’s your chance to become a PHPian and show your
            event-planning skills. And don’t worry, we will guide you in every
            step!
          </p>
          <button>Get In Touch</button>
        </div>
      </div>
    </Contact>
  );
};
const Contact = styled.div`
  background-image: url("./images/heroSection-bg.png");
  background-repeat: no-repeat;
  background-size: cover;
  margin: 50px 0 50px 0;
  .bg-img {
    color: #fff;
    background-image: url("./images/GetInTouch.png");
    background-position: 0 0, 50%;
    background-size: cover, auto;
    border-radius: 20px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    height: 50vh;
    max-height: 780px;
    margin: 0 80px 0 80px;
    padding: 100px 0 100px 0;
    display: flex;
  }
  h1 {
    font-weight: 700;
  }
  h1,
  p {
    color: white;
  }
  .details {
    margin-left: 50px;
    width: 500px;
    font-family: Arial, sans-serif;
    font-size: 14px;
    line-height: 20px;
  }
  button {
    background-color: #f7567c;
    border-radius: 26px;
    padding: 8px 50px 8px;
    font-family: Gilroy, sans-serif;
    font-size: 16px;
    font-weight: 300;
    border: none;
    color: white;
  }
  @media screen and (max-width: 767px) {
    .bg-img {
      background-position: 50%, 50%;
      align-items: center;
      padding: 40px 20px;
    }
    .details {
      margin-left: 20px;
      width: 100%;
    }
  }
`;
export default GetInTouch;
