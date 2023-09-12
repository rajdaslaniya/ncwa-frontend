import React from "react";
import ReactSelect from "react-select";

import "./SelectDropdown.scss";

const SelectDropdown = ({
  id,
  value,
  label,
  error,
  autoFocus = false,
  disabled = false,
  isLoginPage = false,
  setFieldValue,
  options,
  name,
}) => {
  return (
    <div className={`select-dropdown ${isLoginPage ? "" : "small-text"}`}>
      {label && <label className="input-label">{label}</label>}
      <ReactSelect
        value={value}
        id={id}
        autoFocus={autoFocus}
        options={options}
        disabled={disabled}
        className={`dropdown-select ${error && "margin-bottom-10"}`}
        onChange={(text) => {
          if (text) setFieldValue(name, text);
        }}
      />
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default SelectDropdown;
