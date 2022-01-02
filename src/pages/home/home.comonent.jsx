import React from "react";
import "./home.styles.scss";
import Selection from "../../components/selection/selection.component";
import Battle from "../../components/battle/battle.component";
import CustomButton from "../../components/custom-button/custom-button.components";

const Home = ({
  rpsStart,
  playerChoice,
  cpuChoice,
  result,
  setCpuChoice,
  setPlayerChoice,
  setResult,
}) => {
  function playAgain() {
    setCpuChoice(null);
    setPlayerChoice(null);
    setResult(null);
  }
  return (
    <main className="home">
      {playerChoice ? (
        <div className="battle-screen">
          <Battle
            playerChoice={playerChoice}
            cpuChoice={cpuChoice}
            result={result}
          />
          {result ? (
            <div className="result">
              <div className="result-label">YOU {result.toUpperCase()}</div>
              <CustomButton name="Play Again" handleClick={playAgain} />
            </div>
          ) : (
            <div className="filler" />
          )}
        </div>
      ) : (
        <Selection rpsStart={rpsStart} />
      )}
    </main>
  );
};

export default Home;
