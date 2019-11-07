import React from "react";
import PropTypes from "prop-types";

export const Input = props => {
  return (
    <div>
      <label htmlFor={props.id}>{props.label}</label>
      <br />
      <input
        id={props.id}
        type={props.type}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
};

Input.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["text", "email", "number", "password"]).isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
};

Input.defaultProps = {
  type: "text"
};
