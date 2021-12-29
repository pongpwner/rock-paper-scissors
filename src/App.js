import logo from "./logo.svg";
import "./App.css";
import React from "react";

import Home from "./pages/home/home.comonent";
import ScoreCard from "./components/score-card/score-card.component";
import CustomButton from "./components/custom-button/custom-button.components";

function App() {
  return (
    <div className="App">
      <ScoreCard />
      <Home />
      <CustomButton name="RULES" />
    </div>
  );
}

export default App;
