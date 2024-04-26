import React from "react";
import styled from "styled-components";

const HeroSection = () => {
  return (
    <Hero className="container col-xxl-8 px-4 py-5">
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="iframebg col-10 col-sm-8 col-lg-6">
          <iframe
            width="460"
            height="245"
            src="https://www.youtube.com/embed/9pFk0pOPSdA?si=WAg7CAAtbyxwoEGz&autoplay=1&mute=1"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="details col-lg-6">
          <h1 className="display-5 fw-bold lh-1 mb-3">Poetry House Party</h1>
          <p className="lead">
            Feeling Stressed With Hectic Life? Not Finding Motivation to Make
            New Friends? Want A Day To Relax and Enjoy Good Vibes? Poetry House
            Party Is Your Ultimate Answer!
          </p>
          <p className="lead">
            Calling you all to a chilled house party where you get to meet new
            people, share your views, listen to beautiful artists, and become a
            part of our community.
          </p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <h5>250+ Events Completed</h5>
            <h5>15+ Cities</h5>
            <h5>6000+ Attendees</h5>
          </div>
        </div>
      </div>
    </Hero>
  );
};
const Hero = styled.div`
  background-image: url("./images/heroSection-bg.png");
  background-repeat: no-repeat;
  background-size: cover;
  .iframebg {
    background-image: url("./images/iframe-bg.png");
    background-repeat: no-repeat;
    background-size: cover;
  }
  h1 {
    color: #333;
    font-size: 48px;
    font-weight: 600;
  }
  .details {
    p {
      font-size: 16px;
      font-family: "Poppins", sans-serif;
      font-weight: 400;
    }
    @media screen and (min-width: 490px) {
      iframe {
        width: 410px; /* Adjusted width for screen width >= 490px */
        height: 220px; /* Adjusted height for screen width >= 490px */
      }
    }
  }
`;
export default HeroSection;
