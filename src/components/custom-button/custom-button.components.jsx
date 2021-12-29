import React from "react";
import "./custom-button.styles.scss";

const CustomButton = ({ name, handleClick }) => {
  return (
    <button type="button" className="custom-button" onClick={handleClick}>
      {name}
    </button>
  );
};

export default CustomButton;
