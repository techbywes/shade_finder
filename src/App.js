import "./App.css";
import React from "react";
import Nav from "./components/Nav.js";
import Hero from "./components/hero";
import Quiz_1 from "./components/Quiz_1";
import Quiz_2 from "./components/Quiz_2";
import Quiz_3 from "./components/Quiz_3";
import Quiz_4 from "./components/Quiz_4";
import Quiz_5 from "./components/Quiz_5";

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <Quiz_1 />
      <Quiz_2 />
      <Quiz_3 />
      <Quiz_4 />
      <Quiz_5 />
    </div>
  );
}

export default App;
