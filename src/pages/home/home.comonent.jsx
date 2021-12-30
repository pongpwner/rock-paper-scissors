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
    <div className="home">
      {playerChoice ? (
        <div>
          <Battle playerChoice={playerChoice} cpuChoice={cpuChoice} />
          {result ? (
            <div className="result">
              <div className="result-label">You {result} </div>
              <CustomButton name="Play Again" handleClick={playAgain} />
            </div>
          ) : null}
        </div>
      ) : (
        <Selection rpsStart={rpsStart} />
      )}
    </div>
  );
};

export default Home;
