import React, { useState } from "react";
import "./index.css";
import HomePage from "./components/home"; // make sure file is HomePage.jsx
import Intro from "./components/Intro"; // new intro component

function App() {
  const [introDone, setIntroDone] = useState(false);

  return (
    <>
      {!introDone ? (
        <Intro onFinish={() => setIntroDone(true)} />
      ) : (
        <HomePage />
      )}
    </>
  );
}

export default App;
