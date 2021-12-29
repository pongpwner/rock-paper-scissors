import React from "react";
import "./rules-modal.styles.scss";
import close from "../../assets/images/icon-close.svg";
import rock from "../../assets/images/icon-rock.svg";
import paper from "../../assets/images/icon-paper.svg";
import scissors from "../../assets/images/icon-scissors.svg";
import rules from "../../assets/images/image-rules.svg";

const RulesModal = ({ active, toggle }) => {
  return (
    <div className={`rules-modal ${active ? "active" : ""}`}>
      <h1 className="title">RULES</h1>
      <div className="diagram">
        <img src={rules} alt="rules" />
      </div>
      <button type="button" onClick={toggle}>
        <img src={close} alt="x" />
      </button>
    </div>
  );
};
export default RulesModal;
