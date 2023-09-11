import React from "react";

const InputField = ({
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
}) => {
  return (
    <div className="text-field">
      {label && <label className="input-label">{label}</label>}
      <input
        id={id}
        name={name}
        type={type}
        className={`input ${error && "margin-bottom-10"}`}
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

export default InputField;
