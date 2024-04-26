import { useState } from "react";
import "./App.css";
import NavBar from "./assets/components/NavBar";
import CitySection from "./assets/components/CitySection";
import HeroSection from "./assets/components/HeroSection";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      <CitySection />
      <HeroSection />
    </>
  );
}

export default App;
