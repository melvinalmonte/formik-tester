import React from "react";
import { useField } from "formik";

const Radio = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label className="radio">
        <input type="radio" {...field} {...props} />
        <span className="radio-label">{label}</span>
      </label>
      {meta.touched && meta.error ? (
        <p className="help is-danger">{meta.error}</p>
      ) : null}
    </>
  );
};

export default Radio;
