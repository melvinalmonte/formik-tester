import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Input from "./components/form/Input";
import Radio from "./components/form/Radio";
import CheckBox from "./components/form/CheckBox";
import Header from "./components/header/Header";
import Particles from "react-tsparticles";
import { particleConfig } from "./components/utils";

export const App = () => {
  const [formPayload, setFormPayload] = React.useState({});
  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  return (
    <div className="app">
      <Particles
        id="tsparticles"
        canvasClassName="particle-canvas"
        options={particleConfig}
      />
      <Header />
      <div className="container signup-wrapper">
        <div className="columns is-centered" style={{ padding: "1rem" }}>
          <div className="column is-4 signup-box">
            <Formik
              initialValues={{
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                password: "",
                passwordConfirm: "",
                radioValue: "",
                checkboxValues: [],
              }}
              validationSchema={Yup.object({
                firstName: Yup.string().required("This is a required field."),
                lastName: Yup.string().required("This is a required field."),
                email: Yup.string().email("Invalid email format.").required(),
                phone: Yup.string()
                  .min(10)
                  .required("Enter a valid phone number.")
                  .matches(phoneRegExp, "Enter a valid phone number."),
                password: Yup.string().required("This is a required field."),
                passwordConfirm: Yup.string().oneOf(
                  [Yup.ref("password"), null],
                  "Passwords must match."
                ),
                radioValue: Yup.string().required("This is a required field."),
                checkboxValues: Yup.array().required(
                  "Select at least one item."
                ),
              })}
              onSubmit={(values, { setSubmitting }) => {
                setFormPayload({ ...values });
                setSubmitting(false);
              }}
            >
              {({ values, touched, errors }) => (
                <Form>
                  <div className="column ">
                    <Input
                      label="First Name"
                      name="firstName"
                      type="text"
                      placeholder="First Name"
                    />
                    <Input
                      label="Last Name"
                      name="lastName"
                      type="text"
                      placeholder="Last Name"
                    />
                    <Input
                      label="Email"
                      name="email"
                      type="email"
                      placeholder="Email"
                    />
                    <Input
                      label="Phone Number"
                      name="phone"
                      type="tel"
                      placeholder="(xxx)xxx-xxxx"
                    />
                    <Input
                      label="Password"
                      name="password"
                      type="password"
                      placeholder="Password"
                    />
                    <Input
                      label="Confirm Password"
                      name="passwordConfirm"
                      type="password"
                      placeholder="Confirm Password"
                    />
                    <div className="field">
                      <div className="control">
                        <Radio
                          label="Yes"
                          name="radioValue"
                          value="yes"
                          checked={values.radioValue === "yes"}
                        />
                        <Radio
                          label="No"
                          name="radioValue"
                          value="no"
                          checked={values.radioValue === "no"}
                        />
                      </div>
                      {touched.radioValue && errors.radioValue ? (
                        <p className="help is-danger">{errors.radioValue}</p>
                      ) : null}
                    </div>
                    <div className="field">
                      <div className="control">
                        <CheckBox name="checkboxValues" value="Head">
                          Head
                        </CheckBox>
                        <CheckBox name="checkboxValues" value="Shoulders">
                          Shoulders
                        </CheckBox>
                        <CheckBox name="checkboxValues" value="Knees">
                          Knees
                        </CheckBox>
                        <CheckBox name="checkboxValues" value="Toes">
                          Toes
                        </CheckBox>
                        {touched.checkboxValues && errors.checkboxValues ? (
                          <p className="help is-danger">
                            {errors.checkboxValues}
                          </p>
                        ) : null}
                      </div>
                    </div>
                    <div className="field is-grouped">
                      <div className="control">
                        <button type="submit" className="button is-link">
                          Submit
                        </button>{" "}
                      </div>
                      <div className="control">
                        <button
                          type="reset"
                          className="button is-link is-light"
                        >
                          Cancel
                        </button>{" "}
                      </div>
                    </div>
                  </div>
                  <pre>
                    Form Content: {JSON.stringify(formPayload, null, 2)}
                  </pre>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};
