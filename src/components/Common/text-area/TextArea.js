import React from "react";
import "./TextArea.scss";

const TextArea = ({
  id,
  name,
  type = "text",
  placeholder,
  value,
  label,
  disabled = false,
  error,
  autoFocus = false,
  onChange,
  handleBlur,
  touched,
  isLoginPage = false,
}) => {
  return (
    <div className={`text-area-field ${isLoginPage ? "" : "small-text"}`}>
      {label && <label className="input-label">{label}</label>}
      <textarea
        id={id}
        name={name}
        type={type}
        rows={5}
        className={`input ${error && touched && "margin-bottom-10"}`}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        value={value}
        autoFocus={autoFocus}
        onBlur={handleBlur}
        style={{ backgroundColor: disabled && "#E7E0D3" }}
      />
      {error && touched && <p className="error-message">{error}</p>}
    </div>
  );
};

export default TextArea;
