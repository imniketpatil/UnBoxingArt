import React from "react";
import styled from "styled-components";
import AboutCard from "./AboutCard";

const AboutSection = () => {
  return (
    <About>
      <div className="inner-div">
        <h4>WHAT IS POETRY HOUSE PARTY?</h4>
        <h2>About the Event</h2>
        <p>
          Poetry House Party is your ticket to good times! From games and
          meaningful conversations to music and yummy food – we have a whole
          package of fun-filled activities you would not want to miss.
        </p>
      </div>

      <div className="cards-grid-container">
        <AboutCard
          source="Art_Circle"
          head="The Art Circle"
          text="Standing in a corner alone is not allowed at PHP! Throw the
          awkwardness out of the window and get ready for some amazing
          activities, stories, poems and laughter. You can share your thoughts,
          and listen to interesting stories that others share."
        />

        <AboutCard
          source="Music_Therapy"
          head="Music Therapy"
          text="PHP Music Therapy comes with a twist. Yes, there is music and there is singing but not the boring way. You have to sing with all your heart. So, go loud and don't worry about anyone judging you because we'll all join you. Just feel happy with every beat!"
        />

        <AboutCard
          source="Dabba_Party"
          head="The Dabba Party"
          text="Remember school's lunch time when everyone would share their dabbas? We bring back those times at PHP with our exclusive potluck party. Bring your favourite dish to share and end up with a feast!"
        />

        <AboutCard
          source="Friend"
          head="Find your friend-mate"
          text="Our house party vibe can turn strangers into friends in no time. Don't believe? Attend a party and see for yourself. You will find people from different fields whose thoughts and vibes match yours. And our interesting party events will make sure you find one quickly!"
        />

        <AboutCard
          source="Stage"
          head="Feel The Stage"
          text="Enjoy the stunning performances of amazing poets, singers, artists and people like you! Yes, it's a people's party and we open the stage for everyone who wants to show their hidden talent. So, leave your hesitation aside and get on the stage!"
        />

        <AboutCard
          source="Party_Games"
          head="P.S. We Love Games"
          text="And trust us, you are going to love them too! There are ice-breakers, hilarious games and then there are games that will keep the good vibes alive! We love surprises and that's why we'll keep the games a surprise. Join us to experience them."
        />
      </div>
    </About>
  );
};

const About = styled.div`
  background-image: url("./images/heroSection-bg.png");
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 75%;
  margin: 2rem auto;

  .cards-grid-container {
    grid-column-gap: 40px;
    grid-row-gap: 40px;
    text-align: left;
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr 1fr;
    grid-auto-columns: 1fr;
    margin-top: 50px;
    display: grid;
    background-image: url("./images/heroSection-bg.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url("./images/iframe-bg.png");
  }

  h4,
  h2,
  p {
    text-align: center;
  }

  h4 {
    color: #363282;
    font-family: Lato, sans-serif;
    font-size: 18px;
    font-weight: 700;
  }

  h2 {
    font-family: Gilroy, sans-serif;
    font-size: 40px;
    font-weight: 600;
  }

  p {
    max-width: 80%;
    margin-top: 10px;
    font-family: Gilroy, sans-serif;
    font-size: 16px;
    font-weight: 500;
  }

  .inner-div {
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
    background-image: url("./images/heroSection-bg.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url("./images/iframe-bg.png");
  }
  @media screen and (max-width: 991px) {
    .cards-grid-container {
      grid-column-gap: 20px;
      grid-template-columns: 1fr 1fr;
    }
  }
  @media screen and (max-width: 650px) {
    .cards-grid-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
`;

export default AboutSection;
