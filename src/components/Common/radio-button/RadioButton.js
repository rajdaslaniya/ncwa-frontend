import React from "react";
import styles from "./RadioButton.scss";

const RadioButton = ({
  error,
  setFieldValue,
  label,
  name,
  value,
  checkBoxLabel,
  val,
  id,
}) => {
  return (
    <>
      {label && <b className={styles.inputLabel}>{label}</b>}
      <div>
        <input
          type="radio"
          id={id}
          name={name}
          value={val}
          onChange={() => setFieldValue(name, val)}
          checked={val === value}
        />
        <label htmlFor={id}>{checkBoxLabel}</label>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </div>
      {error && <p className={styles.errorMessage}>{error}</p>}
    </>
  );
};

export default RadioButton;
