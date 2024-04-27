import React from "react";
import styled from "styled-components";

const HeroSection = () => {
  return (
    <Hero className="container col-xxl-8 px-4 py-5">
      <div className="video-div row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="iframebg col-10 col-sm-8 col-lg-6">
          <iframe
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
          <div className="events d-grid gap-2 d-md-flex justify-content-md-start">
            <h5>
              250+ <br />
              Events Completed
            </h5>
            <h5>
              15+ <br />
              Cities
            </h5>
            <h5>
              6000+ <br />
              Attendees
            </h5>
          </div>
        </div>
      </div>
    </Hero>
  );
};

const Hero = styled.div`
  .video-div {
    display: flex;
    justify-content: center;
  }
  background-image: url("./images/heroSection-bg.png");
  background-repeat: no-repeat;
  background-size: cover;
  .iframebg {
    background-image: url("./images/iframe-bg.png");
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px 0px 20px 0px;
    iframe {
      width: 410px;
      height: 220px;
    }
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
  }

  /* @media screen and (max-width: 440px) {
    .iframebg iframe {
      width: 390px;
      height: 210px;
    }
  }

  @media screen and (max-width: 415px) {
    .iframebg {
      padding: 0;
    }
  }

  @media screen and (max-width: 990px) and (min-width: 460px) {
    .iframebg {
      width: 615px;
      height: 330px;
    }
  } */
  .events {
    h5 {
      padding: 0px 15px 0px 15px;
    }
  }
`;

export default HeroSection;
