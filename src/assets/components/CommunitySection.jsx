import React from "react";
import styled from "styled-components";
const CommunitySection = () => {
  return (
    <Community>
      <div className="with-bg">
        <div className="first">
          <h1>Shubham Sharma</h1>
          <p className="city">PHP - Bhopal</p>
          <p>
            "Poetry House Party was one of the best experiences I have ever had.
            Not only I got to meet new people but I also made some amazing
            friends there. I shared my poems with everyone and I really loved
            the response. I am glad I attended this event."
          </p>
        </div>
        <div className="second">
          <h1>Megha Mathew</h1>
          <p className="city">PHP - Nagpur</p>
          <p>
            "I used to write stories for quite a long time but I always kept it
            in my diary. Poetry House Party gave me a chance to explore my
            ability to perform on stage. The crowd was really delightful. I felt
            as if I was performing in front of my family and friends."
          </p>
        </div>
      </div>
      <div className="with-out-bg">
        <p>HAPPY PEOPLE, BEAUTIFUL REVIEWS</p>
        <h2>What Our Community says</h2>
      </div>
    </Community>
  );
};
const Community = styled.div`
  background-image: url("./images/heroSection-bg.png");
  background-repeat: no-repeat;
  background-size: cover;
  padding: 50px 0px 50px 0px;

  display: flex;
  flex-direction: row;
  .with-bg {
    display: flex;
    flex-direction: row;
    max-width: 70%;
  }
  .with-bg {
    .city {
      font-weight: 600;
      p {
        margin: 0;
      }
    }
    background-image: url("./images/Community-bg.png");
    background-repeat: no-repeat;
    background-size: cover;
    padding: 50px;
    .first {
      padding: 15px;
      margin: 0px 20px 0px 20px;
      background-color: white;
    }
    .second {
      padding: 15px;
      margin: 0px 20px 0px 20px;
      background-color: white;
    }
    h1 {
      font-family: "Poppins", sans-serif;
      font-size: 16px;
      font-weight: 800;
    }
    p {
      font-family: "Poppins", sans-serif;
      font-weight: 400;
    }
  }
  .with-out-bg {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 3rem;
    p {
      color: #363282;
      font-family: "Poppins", sans-serif;
      font-size: 18px;
      font-weight: 700;
    }
    h2 {
      font-family: "Poppins", sans-serif;
      font-size: 40px;
      font-weight: 600;
    }
  }

  @media screen and (max-width: 1000px) {
    display: flex;
    flex-direction: column-reverse;
    max-width: 100%;
    align-items: center;
    justify-content: center;
  }
  @media screen and (max-width: 850px) {
    .with-bg {
      display: flex;
      flex-direction: column;

      .first {
        margin: 20px 0px 20px 0px;
      }
      .second {
        margin: 20px 0px 20px 0px;
      }
    }
  }
`;
export default CommunitySection;
