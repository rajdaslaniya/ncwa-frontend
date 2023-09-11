import React from "react";
import { downSvgImage } from "../../../assets/images";
import "./StepComponent.css";

const StepComponent = ({ index, text }) => {
  return (
    <div className="step-container">
      <label>
        Step {index}: {text}
      </label>
      <img src={downSvgImage} alt="down" className="down-image" />
    </div>
  );
};

export default StepComponent;
