import React from "react";
import { useField } from "formik";

const CheckBox = ({ children, ...props }) => {
  const [field] = useField({ ...props, type: "checkbox" });

  return (
    <>
      <label className="checkbox">
        <input type="checkbox" {...field} {...props} />
        <span className="checkbox-value">{children}</span>
      </label>
    </>
  );
};

export default CheckBox;
