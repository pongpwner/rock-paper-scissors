import "./App.scss";
import React, { useEffect, useState } from "react";

import Home from "./pages/home/home.comonent";
import ScoreCard from "./components/score-card/score-card.component";
import CustomButton from "./components/custom-button/custom-button.components";
import RulesModal from "./components/rules-modal/rules-modal.components";

function App() {
  const [rulesModalActive, setRulesModalActive] = useState(false);
  const [playerChoice, setPlayerChoice] = useState(null);
  const [cpuChoice, setCpuChoice] = useState(null);
  const [result, setResult] = useState(null);
  //const [score, setScore] = useState(0);
  const [score, setScore] = useState(() => {
    const savedScore = localStorage.getItem("score");
    const initialScoreValue = JSON.parse(savedScore);
    return initialScoreValue || 0;
  });

  useEffect(() => {
    // storing score
    localStorage.setItem("score", JSON.stringify(score));
  }, [score]);

  //helper functions
  function generateRandomIntegerInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  function cpuSelect() {
    switch (generateRandomIntegerInRange(1, 3)) {
      case 1:
        setTimeout(setCpuChoice, 1000, "rock");
        break;
      case 2:
        setTimeout(setCpuChoice, 1000, "paper");
        break;
      case 3:
        setTimeout(setCpuChoice, 1000, "scissors");
        break;
      default:
        break;
    }
  }

  //functions
  function toggleRulesModal() {
    setRulesModalActive(!rulesModalActive);
  }
  function rpsStart(choice) {
    setPlayerChoice(choice, cpuSelect());
  }

  useEffect(() => {
    function calculateResult() {
      if (
        (cpuChoice === "rock" && playerChoice === "scissors") ||
        (cpuChoice === "paper" && playerChoice === "rock") ||
        (cpuChoice === "scissors" && playerChoice === "paper")
      ) {
        console.log("1");

        setTimeout(setResult, 500, "lose");
        return;
      } else if (
        (playerChoice === "rock" && cpuChoice === "scissors") ||
        (playerChoice === "paper" && cpuChoice === "rock") ||
        (playerChoice === "scissors" && cpuChoice === "paper")
      ) {
        console.log("2");
        setTimeout(setResult, 500, "win");

        return;
      } else {
        console.log("3");
        console.log(cpuChoice);
        console.log(playerChoice);
        setTimeout(setResult, 500, "draw");

        return;
      }
    }

    if (cpuChoice && playerChoice) {
      calculateResult();
    }
  }, [cpuChoice, playerChoice]);
  useEffect(() => {
    console.log("result");
    console.log(result);
    if (result === "win") {
      setScore((prevScore) => prevScore + 1);
    }
    if (result === "lose") {
      setScore((prevScore) => prevScore - 1);
    }
  }, [result]);
  return (
    <div className="App">
      <RulesModal active={rulesModalActive} toggle={toggleRulesModal} />
      <ScoreCard score={score} />
      <Home
        rpsStart={rpsStart}
        playerChoice={playerChoice}
        cpuChoice={cpuChoice}
        result={result}
        setCpuChoice={setCpuChoice}
        setPlayerChoice={setPlayerChoice}
        setResult={setResult}
      />

      <CustomButton name="RULES" handleClick={toggleRulesModal} />

      <footer className="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Eric Shyu</a>.
      </footer>
    </div>
  );
}

export default App;
