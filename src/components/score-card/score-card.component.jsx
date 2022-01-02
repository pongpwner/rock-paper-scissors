import React from "react";

import Score from "../score/score.component";
import "./score-card.styles.scss";

const ScoreCard = ({ score }) => {
  return (
    <header className="score-card">
      <ul>
        <li>ROCK</li>
        <li>PAPER</li>
        <li>SCISSORS</li>
      </ul>
      <Score score={score} />
    </header>
  );
};

export default ScoreCard;
