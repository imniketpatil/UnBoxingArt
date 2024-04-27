import React from "react";
import styled from "styled-components";

const FooterSection = () => {
  return (
    <Footer id="footer" className="footer">
      <div className="w-container">
        <div className="main footer-flex-container">
          <a href="#" className="footer-logo-link">
            <img
              src="https://assets-global.website-files.com/6224703e7862127338280ea4/6225dd162ecfcfc71f9aad12_Footer%20logo.png"
              alt="Unboxing Art Logo"
              className="footer-image"
            />
          </a>
          <div className="socials">
            <h2 className="footer-heading">Follow us on</h2>
            <ul role="list" className="list">
              <li>
                <a
                  href="https://www.facebook.com/unboxingart.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-inline-block"
                >
                  <img
                    src="https://assets-global.website-files.com/6224703e7862127338280ea4/6225dda4971cfac10a55dda1_fb.png"
                    loading="lazy"
                    alt="Follow Unboxing Art on Facebook"
                    className="footer-link-item"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/unboxingart.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-inline-block"
                >
                  <img
                    src="https://assets-global.website-files.com/6224703e7862127338280ea4/6225dda447089218fe6ab58f_insta.png"
                    loading="lazy"
                    alt="Follow Unboxing Art on Instagram"
                    className="footer-link-item"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/channel/UCBtGV6724iG63C53bvizrtA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-inline-block"
                >
                  <img
                    src="https://assets-global.website-files.com/6224703e7862127338280ea4/6225dda4ea57e2055d53eac5_youtube.png"
                    loading="lazy"
                    alt="Subscribe to Unboxing Art's YouTube channel"
                    className="footer-link-item"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-block-3">
          <strong className="bold-text">
            Copyright © 2023 DARKROOM POETS EDUTECH PRIVATE LIMITED. All rights
            reserved.
          </strong>
        </div>
      </div>
    </Footer>
  );
};

const Footer = styled.footer`
  margin-top: 50px;
  padding-top: 60px;
  padding-bottom: 40px;
  .main {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    max-width: 940px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 40px;
  }
  background-color: #363384;
  background-image: url("./images/footer-bg.png");
  background-position: 0%;
  background-repeat: repeat-x;
  background-size: cover;
  text-align: center;
  .list {
    display: flex;
    list-style: none;
  }
  .list img {
    margin: 0 5px 0 5px;
  }
  .socials {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .socials h2 {
    color: #f1f1f1;
    text-align: center;
    margin-top: 0;
    margin-bottom: 20px;
    font-size: 14px;
    line-height: 1.5;
  }
  .bold-text {
    color: #f1f1f1;
    font-family: Lato, sans-serif;
    font-size: 16px;
  }
  /* 
  
  
  align-items: flex-start;
  margin-top: 50px;
  padding-top: 60px;
  padding-bottom: 40px;

  .main {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    max-width: 940px;
    margin-left: auto;
    margin-right: auto;

    img {
      object-fit: contain;
      object-position: 0% 50%;
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      vertical-align: middle;
      max-width: 100%;
      display: inline-block;
    }
  }

  h2 {
    color: white;
  }

  .list {
    display: flex;
    list-style-type: none;
    padding: 0;
    margin: 0;

    li {
      margin-right: 20px;
    }

    a {
      display: block;
    }

    img {
      width: 40px;
      height: 40px;
    }
  } */
`;

export default FooterSection;
