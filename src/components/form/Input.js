import React from "react";
import { useField } from "formik";

const Input = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="field">
      <label htmlFor={props.id || props.name} className="label">
        {label}
      </label>
      <div className="control has-icons-right">
        <input
          className={meta.touched && meta.error ? "input is-danger" : "input"}
          {...field}
          {...props}
        />
        <span className="icon is-small is-right">
          <i className="fas fa-check"></i>
        </span>
      </div>
      {meta.touched && meta.error ? (
        <p className="help is-danger">{meta.error}</p>
      ) : null}
    </div>
  );
};

export default Input;
