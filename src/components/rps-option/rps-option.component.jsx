import React from "react";
import "./rps-option.styles.scss";

const RpsOption = ({ image, name, rpsStart }) => {
  return (
    <button
      className={`button image-cropper ${name}`}
      type="button"
      onClick={rpsStart}
    >
      <img src={image} alt="name" />
    </button>
  );
};

export default RpsOption;
