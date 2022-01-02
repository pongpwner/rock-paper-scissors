import React from "react";
import "./rps-option.styles.scss";

const RpsOption = ({ image, name, rpsStart, result, player, cpu }) => {
  return (
    <div
      className={`rps-option ${player ? "player" : ""} ${cpu ? "cpu" : ""} ${
        result ? result : ""
      }`}
    >
      <button
        className={`button image-cropper ${name}`}
        type="button"
        onClick={rpsStart}
      >
        <img src={image} alt="name" />
      </button>
    </div>
  );
};

export default RpsOption;
