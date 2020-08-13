import React from "react";
import "../../App.css"

const FormikTester = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className="form-item">
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          name={"username"}
          onChange={props.handleChange}
          value={props.value.username}
        />
      </div>
      <div className="form-item">
        <label htmlFor="username">Password: </label>
        <input
          type="password"
          name={"password"}
          onChange={props.handleChange}
          value={props.value.password}
        />
      </div>
      <div className="form-item">
        <label htmlFor="username">Radio Button: </label>
        <input
          type="radio"
          name={"customRadio"}
          onChange={props.handleChange}
          value={"Radio Value"}
        />
      </div>
      <div className="form-item">
        <label htmlFor="username">Checkbox 1: </label>
        <input
          type="checkbox"
          name={"customCheckbox"}
          onChange={props.handleChange}
          value={"Checkbox value #1"}
        />
      </div>
      <div className="form-item">
        <label htmlFor="username">Checkbox 2: </label>
        <input
          type="checkbox"
          name={"customCheckbox"}
          onChange={props.handleChange}
          value={"Checkbox value #2"}
        />
      </div>
      <div className="form-item">
        <button type="submit">Submit Form</button>
      </div>
      <div className="form-item">
        <pre>Form Data: {JSON.stringify(props.payload, null, 2)}</pre>
        <pre>Form Errors: {JSON.stringify(props.errors, null, 2)}</pre>
      </div>
    </form>
  );
};

export default FormikTester;
