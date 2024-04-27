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
      <div className="inner-div">
        <h4>WHAT WE PROVIDE</h4>
        <h2>Glimpses from the Past</h2>
      </div>
    </Past>
  );
};
const Past = styled.div``;
export default PastSection;
