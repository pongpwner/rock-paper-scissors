import React from "react";
import "./rps-option.styles.scss";

const RpsOption = ({ image, name }) => {
  return (
    <button className={`button image-cropper ${name}`} type="button">
      <img src={image} alt="name" />
    </button>
  );
};

export default RpsOption;
