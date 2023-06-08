import InputComponent from "../../components/input/input.component";
import { useFormik } from "formik";
import React from "react";
import "./login-form.styles.css";
import * as Yup from "yup";

export interface FormValues {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email")
      .required("Please Enter Email Address"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters long")
      .required("Please Enter Password"),
  });

  const formik = useFormik<FormValues>({
    initialValues: {
      email: "",
      password: "",
    } as FormValues,
    onSubmit: (values) => {
      console.log(values);
    },
    validateOnBlur: true,
    validationSchema,
  });
  const { email, password } = formik.values;
  return (
    <div className={"form-container"}>
      <div className="logo">
        <img
          src="https://media.licdn.com/dms/image/C4D0BAQEMITRBk0Yf6w/company-logo_200_200/0/1661777243312?e=2147483647&v=beta&t=oN3aPqonbNrwLeWoGSy7qiMVqGZxXvOeSXSCuIY39r8"
          alt=""
        />
      </div>
      <h1 className={"title"}>Log in to your account</h1>
      <div className="subtitle">Welcome back! Please enter your details</div>
      <form onSubmit={formik.handleSubmit} noValidate={true}>
        <InputComponent
          name={"email"}
          placeholder={"Enter you email"}
          label={"Email"}
          type={"email"}
          formik={formik}
        />
        <InputComponent
          name={"password"}
          placeholder={"••••••••••"}
          label={"Password"}
          type={"password"}
          formik={formik}
        />
        <button
          className={`${!email || !password ? "button-disabled" : ""}`}
          type={"submit"}
        >
          Login
        </button>
      </form>
    </div>
  );
};
export default Login;
