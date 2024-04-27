import { useState } from "react";
import "./App.css";
import NavBar from "./assets/components/NavBar";
import CitySection from "./assets/components/CitySection";
import HeroSection from "./assets/components/HeroSection";
import AboutSection from "./assets/components/AboutSection";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      <CitySection />
      <HeroSection />
      <AboutSection />
    </>
  );
}

export default App;
