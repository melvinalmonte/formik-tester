import React from "react";
import { useField } from "formik";

const Radio = ({ label, ...props }) => {
  const [field] = useField(props);

  return (
    <>
      <label className="radio">
        <input type="radio" {...field} {...props} />
        <span className="radio-value">{label}</span>
      </label>
    </>
  );
};

export default Radio;
