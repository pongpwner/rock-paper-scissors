import React from "react";
import "./custom-button.styles.scss";

const CustomButton = ({ name }) => {
  return (
    <button type="button" className="custom-button">
      {name}
    </button>
  );
};

export default CustomButton;
