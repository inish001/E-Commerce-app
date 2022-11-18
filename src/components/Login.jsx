import { Form, Formik, Field, ErrorMessage } from "formik";
import React, { useState } from "react";
import TextError from "./TextError";
import * as Yup from "yup";

const initialValues = {
  email: "",
  password: "",
};
const validationSchema = Yup.object().shape({
  email: Yup.string().email().required("Required!"),
  name: Yup.string().required("Required!"),
});
const onSubmit = (values) => {
  console.log(values);
};
const Login = () => {
  return (
    <Formik
      initialValues={initialValues}
      //   onSubmit={onSubmit}
      validationSchema={validationSchema}
      enableReinitialize
    >
    </Formik>
  );
};

export default Login;
