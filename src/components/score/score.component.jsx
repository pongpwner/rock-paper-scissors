import React from "react";
import "./score.styles.scss";

const Score = ({ score }) => {
  return (
    <div className="score">
      <div className="text">SCORE</div>
      <div className="number">{score}</div>
    </div>
  );
};

export default Score;
