import React from "react";
import styled from "styled-components";

const CitySection = () => {
  const cities = {
    Mumbai: "28th April",
    Pune: "28th April",
    Bengaluru: "4th May",
    Indore: "5th May",
  };

  return (
    <City>
      <h2>Choose Your City</h2>
      <div className="city-btns">
        {Object.entries(cities).map(([city, date]) => (
          <Button key={city}>
            {city} - {date}
          </Button>
        ))}
      </div>
    </City>
  );
};

const City = styled.div`
  text-align: center;
  margin: 80px 0px 80px 0px;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  h2 {
    color: #333;
    margin: 3rem 0 3rem 0;
    font-size: 32px;
    line-height: 36px;
    font-weight: 500;
  }
  Button:hover {
    cursor: pointer;
  }
`;

const Button = styled.button`
  text-align: center;
  background-color: #ee547b;
  border-radius: 10px;
  color: white;
  margin: 0.3rem 0.6rem 0.3rem 0.6rem;
  padding: 0.6rem 0.6rem 0.6rem 0.6rem;
  border: none;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  min-width: 200px;
`;

export default CitySection;
