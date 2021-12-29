import React from "react";
import "./selection.styles.scss";
import triangle from "../../assets/images/bg-triangle.svg";
import rock from "../../assets/images/icon-rock.svg";
import paper from "../../assets/images/icon-paper.svg";
import scissors from "../../assets/images/icon-scissors.svg";
import RpsOption from "./rps-option/rps-option.component";

const Selection = () => {
  return (
    <div className="selection">
      <div className="options">
        <div className="row1">
          <RpsOption name="paper" image={paper} />
          <RpsOption name="scissors" image={scissors} />
        </div>
        <div className="row2">
          <RpsOption name="rock" image={rock} />
        </div>
      </div>
    </div>
  );
};

export default Selection;
