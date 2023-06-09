import React from "react";
import "./register-form.styles.css";
import InputComponent from "../../components/input/input.component";
import { useFormik } from "formik";
import RadioButton from "../../components/radio-button/radio-button.component";
import * as Yup from "yup";
import { Link } from "react-router-dom";

interface FormValues {
  email: string;
  password: string;
  mobile: string;
  gender: string;
}

const Register: React.FC = () => {
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email")
      .required("Please Enter Email Address"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters long")
      .required("Please Enter Password"),
    mobile: Yup.string()
      .min(10, "Mobile number must be at least 10 digits")
      .max(10, "Mobile number must be at least 10 digits")
      .required("Please Enter Mobile Number"),
    gender: Yup.string().required("Please Select Gender"),
  });

  const formik = useFormik<FormValues>({
    initialValues: {
      email: "",
      password: "",
      mobile: "",
      gender: "",
    } as FormValues,
    onSubmit: (values) => {
      console.log(values);
    },
    validateOnBlur: true,
    validationSchema,
  });

  const { email, password, mobile, gender } = formik.values;

  const radioButtonOptions = [
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
    { label: "Other", value: "other" },
  ];
  return (
    <div className={"form-container"}>
      <div className="logo">
        <img
          src="https://media.licdn.com/dms/image/C4D0BAQEMITRBk0Yf6w/company-logo_200_200/0/1661777243312?e=2147483647&v=beta&t=oN3aPqonbNrwLeWoGSy7qiMVqGZxXvOeSXSCuIY39r8"
          alt="logo"
        />
      </div>
      <h1 className={"title"}>Register your account</h1>
      <div className="subtitle">
        Register yourself! Please enter your details
      </div>
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
        <InputComponent
          name={"mobile"}
          placeholder={"Enter your mobile number"}
          label={"Mobile"}
          type={"number"}
          formik={formik}
        />
        {/*Radio button*/}
        <RadioButton
          nameFor={"gender"}
          radioOptions={radioButtonOptions}
          formik={formik}
        />
        <span className="login-user">
          Already have an account? <Link to="/">Login</Link>{" "}
        </span>
        <button
          className={`${
            !email || !password || !mobile || !gender ? "button-disabled" : ""
          }`}
          type={"submit"}
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
