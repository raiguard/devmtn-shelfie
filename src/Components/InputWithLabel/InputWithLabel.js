import React from "react";
import "./InputWithLabel.css";

export default (props) => {
  const { label, currentText, onChangeFn, varName, type, min } = props;
  return (
    <section className="input-with-label">
      <label>{label}</label>
      <input value={currentText} onChange={(e) => onChangeFn(varName, e.target.value)} type={type} min={min} />
    </section>
  );
};
