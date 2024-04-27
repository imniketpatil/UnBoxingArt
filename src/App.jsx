import { useState } from "react";
import "./App.css";
import NavBar from "./assets/components/NavBar";
import CitySection from "./assets/components/CitySection";
import HeroSection from "./assets/components/HeroSection";
import AboutSection from "./assets/components/AboutSection";
import styled from "styled-components";
import PastSection from "./assets/components/PastSection";
function App() {
  const [count, setCount] = useState(0);

  return (
    <AppComp>
      <NavBar />
      <CitySection />
      <HeroSection />
      <AboutSection />
      <PastSection />
    </AppComp>
  );
}

const AppComp = styled.div`
  background-image: url("./images/heroSection-bg.png");
  background-attachment: fixed;
  background-size: cover;
`;
export default App;
