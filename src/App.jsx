import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar/nav-bar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
    </>
  );
}

export default App;
