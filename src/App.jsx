import { useState } from "react";
import "./App.css";
import NavBar from "./assets/components/NavBar";
import CitySection from "./assets/components/CitySection";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      <CitySection />
    </>
  );
}

export default App;
