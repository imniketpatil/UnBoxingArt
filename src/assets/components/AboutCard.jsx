import React from "react";
import styled from "styled-components";
const AboutCard = (props) => {
  return (
    <Card className="card">
      <img
        className="card-img-top"
        src={`./images/${props.source}.gif`}
        alt="Art Circle Gif"
      />
      <div className="card-body">
        <h3 className="card-title">{props.head}</h3>
        <p className="card-text">{props.text}</p>
      </div>
    </Card>
  );
};

const Card = styled.div`
  border: 2px solid #cdcdcd;
  border-radius: 20px;
  img {
    border-radius: 10px;
  }
  h3 {
    width: 100%;
    text-align: center;
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 24px;
    font-weight: 700;
    line-height: 30px;
  }
  p {
    font-family: Lato, sans-serif;
    font-size: 16px;
  }
  .card-body {
    padding: 12px 12px 12px 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content: center; */
  }
  .card-text {
    width: 100%;
  }
`;

export default AboutCard;
