import React from "react";

import Score from "../score/score.component";
import "./score-card.styles.scss";

const ScoreCard = () => {
  return (
    <div className="score-card">
      <ul>
        <li>Rock</li>
        <li>Paper</li>
        <li>Scissors</li>
      </ul>
      <Score />
    </div>
  );
};

export default ScoreCard;
