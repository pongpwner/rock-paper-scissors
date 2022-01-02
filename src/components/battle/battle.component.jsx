import React from "react";
import "./battle.styles.scss";
import rock from "../../assets/images/icon-rock.svg";
import paper from "../../assets/images/icon-paper.svg";
import scissors from "../../assets/images/icon-scissors.svg";
import RpsOption from "../rps-option/rps-option.component";

const Battle = ({ playerChoice, cpuChoice, result }) => {
  let playerChoiceImage;
  switch (playerChoice) {
    case "rock":
      playerChoiceImage = (
        <RpsOption name={playerChoice} image={rock} result={result} player />
      );
      break;
    case "paper":
      playerChoiceImage = (
        <RpsOption name={playerChoice} image={paper} result={result} player />
      );
      break;

    case "scissors":
      playerChoiceImage = (
        <RpsOption
          name={playerChoice}
          image={scissors}
          result={result}
          player
        />
      );
      break;

    default:
      break;
  }

  let cpuChoiceImage;
  switch (cpuChoice) {
    case "rock":
      cpuChoiceImage = (
        <RpsOption name={cpuChoice} image={rock} result={result} cpu />
      );
      break;
    case "paper":
      cpuChoiceImage = (
        <RpsOption name={cpuChoice} image={paper} result={result} cpu />
      );
      break;

    case "scissors":
      cpuChoiceImage = (
        <RpsOption name={cpuChoice} image={scissors} result={result} cpu />
      );
      break;

    default:
      break;
  }
  return (
    <div className="battle">
      <div className="player ">
        {playerChoiceImage}
        <span>YOU PICKED</span>
      </div>

      <div className="cpu">
        {cpuChoice ? cpuChoiceImage : <div className="empty"></div>}
        <span>THE HOUSE PICKED</span>
      </div>
    </div>
  );
};

export default Battle;
