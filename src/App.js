import "./App.css";
import React from "react";
import Nav from "./components/Nav.js";
import Hero from "./components/hero";
import Quiz_1 from "./components/Quiz_1";
import Quiz_2 from "./components/Quiz_2";

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <Quiz_1 />
      <Quiz_2 />
    </div>
  );
}

export default App;
