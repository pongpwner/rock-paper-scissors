import React from "react";
import "./battle.styles.scss";
import rock from "../../assets/images/icon-rock.svg";
import paper from "../../assets/images/icon-paper.svg";
import scissors from "../../assets/images/icon-scissors.svg";
import RpsOption from "../rps-option/rps-option.component";

const Battle = ({ playerChoice, cpuChoice }) => {
  let playerChoiceImage;
  switch (playerChoice) {
    case "rock":
      playerChoiceImage = <RpsOption name={playerChoice} image={rock} />;
      break;
    case "paper":
      playerChoiceImage = <RpsOption name={playerChoice} image={paper} />;
      break;

    case "scissors":
      playerChoiceImage = <RpsOption name={playerChoice} image={scissors} />;
      break;

    default:
      break;
  }

  let cpuChoiceImage;
  switch (cpuChoice) {
    case "rock":
      cpuChoiceImage = <RpsOption name={cpuChoice} image={rock} />;
      break;
    case "paper":
      cpuChoiceImage = <RpsOption name={cpuChoice} image={paper} />;
      break;

    case "scissors":
      cpuChoiceImage = <RpsOption name={cpuChoice} image={scissors} />;
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
