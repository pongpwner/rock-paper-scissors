import React from "react";
import "./selection.styles.scss";
import triangle from "../../assets/images/bg-triangle.svg";
import rock from "../../assets/images/icon-rock.svg";
import paper from "../../assets/images/icon-paper.svg";
import scissors from "../../assets/images/icon-scissors.svg";
import RpsOption from "../rps-option/rps-option.component";

const Selection = ({ rpsStart }) => {
  return (
    <div className="selection">
      <div className="options">
        <div className="row1">
          <RpsOption
            rpsStart={() => rpsStart("paper")}
            name="paper"
            image={paper}
          />
          <RpsOption
            rpsStart={() => rpsStart("scissors")}
            name="scissors"
            image={scissors}
          />
        </div>
        <div className="row2">
          <RpsOption
            rpsStart={() => rpsStart("rock")}
            name="rock"
            image={rock}
          />
        </div>
      </div>
    </div>
  );
};

export default Selection;
