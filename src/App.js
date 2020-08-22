import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Input from "./components/form/Input";
import Radio from "./components/form/Radio";

export const App = () => {
  const [formPayload, setFormPayload] = React.useState({});
  return (
    <div className="container signup-wrapper">
      <div className="columns is-centered">
        <div className="column is-6 signup-box">
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
              password: "",
              passwordConfirm: "",
              radioValue: "",
            }}
            validationSchema={Yup.object({
              firstName: Yup.string().required("This is a required field."),
              lastName: Yup.string().required("This is a required field."),
              email: Yup.string().email("Invalid email format.").required(),
              password: Yup.string().required("This is a required field."),
              passwordConfirm: Yup.string().oneOf(
                [Yup.ref("password"), null],
                "Passwords must match"
              ),
              radioValue: Yup.string().required("This is a required field."),
            })}
            onSubmit={(values, { setSubmitting }) => {
              setFormPayload({ ...values });
              setSubmitting(false);
            }}
          >
            {({ values }) => (
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
                  </div>
                  <div className="field is-grouped">
                    <div className="control">
                      <button type="submit" className="button is-link">
                        Submit
                      </button>{" "}
                    </div>
                    <div className="control">
                      <button type="reset" className="button is-link is-light">
                        Cancel
                      </button>{" "}
                    </div>
                  </div>
                </div>
                <pre>Form Content: {JSON.stringify(formPayload, null, 2)}</pre>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};
