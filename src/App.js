import "./App.css";
import React, { useState } from "react";

import Home from "./pages/home/home.comonent";
import ScoreCard from "./components/score-card/score-card.component";
import CustomButton from "./components/custom-button/custom-button.components";
import RulesModal from "./components/rules-modal/rules-modal.components";

function App() {
  const [rulesModalActive, setRulesModalActive] = useState(true);
  const toggleRulesModal = () => {
    setRulesModalActive(!rulesModalActive);
  };
  return (
    <div className="App">
      <RulesModal active={rulesModalActive} toggle={toggleRulesModal} />
      <ScoreCard />
      <Home />
      <CustomButton name="RULES" handleClick={toggleRulesModal} />
    </div>
  );
}

export default App;
