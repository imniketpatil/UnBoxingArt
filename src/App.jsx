import { useState } from "react";
import "./App.css";
import NavBar from "./assets/components/NavBar";
import CitySection from "./assets/components/CitySection";
import HeroSection from "./assets/components/HeroSection";
import AboutSection from "./assets/components/AboutSection";
import styled from "styled-components";
import PastSection from "./assets/components/PastSection";
import CommunitySection from "./assets/components/CommunitySection";
import GetInTouch from "./assets/components/GetInTouch";
import FAQSection from "./assets/components/FAQSection";
import FooterSection from "./assets/components/FooterSection";
function App() {
  const [count, setCount] = useState(0);

  return (
    <AppComp>
      <NavBar />
      <CitySection />
      <HeroSection />
      <AboutSection />
      <PastSection />
      <CommunitySection />
      <GetInTouch />
      <FAQSection />
      <FooterSection />
    </AppComp>
  );
}

const AppComp = styled.div`
  background-image: url("./images/heroSection-bg.png");
  background-attachment: fixed;
  background-size: cover;
`;
export default App;
