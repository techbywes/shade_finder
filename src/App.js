import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav.js";
import Header from "./components/Header";
import Hero from "./components/hero";
import Quiz_1 from "./components/Quiz_1";
import Quiz_2 from "./components/Quiz_2";
import Quiz_3 from "./components/Quiz_3";
import Quiz_4 from "./components/Quiz_4";
import Quiz_5 from "./components/Quiz_5";
import Light_fair from "./components/light_fair";
import Deep_fair from "./components/Deep_fair";
import Light_brown from "./components/Light_brown";
import Deep_chocolate from "./components/Deep_chocolate";

function App() {
  return (
    <>
    <Nav />
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/Quiz_1" element={< Quiz_1 />} />
        <Route path="/Quiz_2" element={<Quiz_2 />} />
        <Route path="/Quiz_3" element={<Quiz_3 />} />
        <Route path="/Quiz_4" element={<Quiz_4 />} />
        <Route path="/Quiz_5" element={<Quiz_5 />} />
        <Route path="/Light_fair" element={<Light_fair />} />
        <Route path="/Deep_fair" element={<Deep_fair />} />
        <Route path="/Light_brown" element={<Light_brown />} />
        <Route path="/Deep_chocolate" element={<Deep_chocolate />} />
      </Routes>
      <div className="App">
        {/* <Nav />
        <Hero />
        <Quiz_1 />
        <Quiz_2 />
        <Quiz_3 />
        <Quiz_4 />
        <Quiz_5 /> */}
      </div>
    </>
  );
}

export default App;
