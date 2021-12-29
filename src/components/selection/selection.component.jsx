import React from "react";
import "./selection.styles.scss";
import triangle from "../../assets/images/bg-triangle.svg";
import rock from "../../assets/images/icon-rock.svg";
import paper from "../../assets/images/icon-paper.svg";
import scissors from "../../assets/images/icon-scissors.svg";

const Selection = () => {
  return (
    <div className="selection">
      <img className="background-image" src={triangle} alt="triangle" />
      <div className="options">
        <div className="row1">
          <img className="option paper" src={paper} alt="paper" />
          <img className="option scissors" src={scissors} alt="scissors" />
        </div>
        <div className="row2">
          <img className="option rock" src={rock} alt="rock" />
        </div>
      </div>
    </div>
  );
};

export default Selection;
