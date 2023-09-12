import React from "react";

import "./RadioButtonGroup.scss";

const RadioButtonGroup = ({
  error,
  setFieldValue,
  label,
  name,
  value,
  radioButtonItem,
  isLoginPage = false,
}) => {
  return (
    <div className={`radio-button-group ${isLoginPage ? "" : "small-text"}`}>
      {label && <label className="input-label">{label}</label>}
      <div className={`radio-button-container ${error && "margin-bottom-10"}`}>
        {radioButtonItem.map((item) => (
          <div className="radio-item">
            <input
              type="radio"
              id={item.id}
              name={item.name}
              value={item.val}
              onChange={() => setFieldValue(name, item.val)}
              checked={item.val === value}
            />
            <label htmlFor={item.id}>{item.checkBoxLabel}</label>
          </div>
        ))}
      </div>
      {error && <p className="errorMessage">{error}</p>}
    </div>
  );
};

export default RadioButtonGroup;
