import React from "react";

import Score from "../score/score.component";
import "./score-card.styles.scss";

const ScoreCard = ({ score }) => {
  return (
    <div className="score-card">
      <ul>
        <li>Rock</li>
        <li>Paper</li>
        <li>Scissors</li>
      </ul>
      <Score score={score} />
    </div>
  );
};

export default ScoreCard;
