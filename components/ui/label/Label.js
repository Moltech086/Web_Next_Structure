import React from "react";
import "../inputs/input/Input.scss";

const Label = (props) => {
  return (
    <>
      {props.labelName && props.labelName !== "" ? (
        <label className="input-label">{props.labelName}</label>
      ) : null}
      {props.isRequired && <span className="validation-star">*</span>}
      
    </>
  );
};

export default Label;
