import React from "react";
import styled from "styled-components";

const PastSection = () => {
  const imageUrls = [
    "https://assets-global.website-files.com/6224703e7862127338280ea4/62285f1ce0e085606f4cb010_Cinematrix%20Production-57.jpg",
    "https://assets-global.website-files.com/6224703e7862127338280ea4/62285f1dc4dde243249bdc2f_Cinematrix%20Production-73%20copy.jpg",
    "https://assets-global.website-files.com/6224703e7862127338280ea4/62285f1cc86b10bf1315a1c8_Cinematrix%20Production-80.jpg",
    "https://assets-global.website-files.com/6224703e7862127338280ea4/62285f1d05d34a8689876faf_Cinematrix%20Production-140.jpg",
    "https://assets-global.website-files.com/6224703e7862127338280ea4/62285f1da0603fc1ee534191_Cinematrix%20Production-12.jpg",
    "https://assets-global.website-files.com/6224703e7862127338280ea4/62285f1cb2e98d878a220304_Cinematrix%20Production-87.jpg",
    "https://assets-global.website-files.com/6224703e7862127338280ea4/62285f1da0603f143d534190_Cinematrix%20Production-45.jpg",
  ];

  return (
    <Past>
      <div className="outer-div">
        <div className="inner-div">
          <h4>WHAT WE PROVIDE</h4>
          <h2>Glimpses from the Past</h2>
        </div>
        <div className="past-grid-container">
          {imageUrls.map((url, index) => (
            <img
              key={index}
              src={url}
              className={`image ${getImageClassName(index)}`}
              alt={`Past image ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </Past>
  );
};

const Past = styled.div`
  background-image: url("./images/iframe-bg.png");
  background-repeat: no-repeat;
  background-size: cover;
  padding: 6rem 0 6rem 0;
  h4 {
    color: #363282;
    font-family: Lato, sans-serif;
    font-size: 18px;
    font-weight: 700;
    text-align: center;
  }
  h2 {
    font-family: Gilroy, sans-serif;
    font-size: 40px;
    font-weight: 600;
    text-align: center;
  }
  display: flex;
  align-items: center;
  justify-content: center;

  .outer-div {
    max-width: 75%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .past-grid-container {
    grid-column-gap: 20px;
    grid-row-gap: 20px;
    grid-template:
      "."
      "."
      "."
      "." / 1fr 1fr 1fr 1fr;
    grid-auto-columns: 1fr;
    align-self: center;
    margin-top: 40px;
    display: grid;
  }

  .image {
    object-fit: cover;
    object-position: 0% 50%;
    width: 100%;
    height: 100%;
  }

  .first {
    grid-area: 1 / 1 / 2 / 2;
  }
  .second {
    grid-area: 1 / 2 / 3 / 4;
  }
  .third {
    grid-area: 1 / 4 / 2 / 5;
  }
  .fourth {
    grid-area: 2 / 1 / 3 / 2;
  }
  .fifth {
    grid-area: 2 / 4 / 3 / 5;
  }
  .sixth {
    grid-area: 3 / 1 / 4 / 3;
  }
  .seven {
    grid-area: 3 / 3 / 4 / 5;
  }

  @media screen and (max-width: 770px) {
    .past-grid-container {
      grid-template-rows: repeat(6, 1fr);
      grid-template-columns: repeat(1, 1fr);
    }
    .first {
      grid-area: 1 span / 1 span / 2 span / 3 span;
    }
    .second {
      grid-area: 1 span / 1 span / 2 span / 3 span;
    }
    .third {
      grid-area: 1 span / 1 span / 2 span / 3 span;
    }
    .fourth {
      grid-area: 1 span / 1 span / 2 span / 3 span;
    }
    .fifth {
      grid-area: 1 span / 1 span / 2 span / 3 span;
    }
    .sixth {
      grid-area: 1 span / 1 span / 2 span / 3 span;
    }
    .seven {
      grid-area: 1 span / 1 span / 2 span / 3 span;
    }
  }
`;

const getImageClassName = (index) => {
  const classNames = [
    "first",
    "second",
    "third",
    "fourth",
    "fifth",
    "sixth",
    "seven",
  ];
  return classNames[index] || "";
};

export default PastSection;
