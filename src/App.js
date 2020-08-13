import React from "react";
import "./App.css";
import { FormikTester } from "./components/forms";
import * as Yup from "yup";
import { useFormik } from "formik";

function App() {
  const [formikPayload, setFormikPayload] = React.useState({});

  const formConfig = useFormik({
    initialValues: {
      username: "",
      password: "",
      customRadio: "",
      customCheckbox: [],
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Username field is empty"),
      password: Yup.string().required("Password field is empty"),
      customRadio: Yup.string().required("Radio field is empty"),
      customCheckbox: Yup.array().required("Make at least one selection"),
    }),
    onSubmit: (values) => setFormikPayload(values),
  });
  return (
    <div className="App">
      <header className="App-header">
        <h1>Formik Tester: </h1>
        <FormikTester
          handleSubmit={formConfig.handleSubmit}
          handleChange={formConfig.handleChange}
          value={formConfig.values}
          errors={formConfig.errors}
          payload={formikPayload}
        />
        <code>
          Source code:{" "}
          <a href="https://github.com/melvinalmonte/formik-tester">Here</a>
        </code>
      </header>
    </div>
  );
}

export default App;
