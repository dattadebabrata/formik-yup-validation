import "./input.styles.css";
import { FormikProps } from "formik";
import { FormValues } from "../../routes/login-form/login-form.component";
import React from "react";

interface InputProps {
  name: string;
  placeholder: string;
  label: string;
  type: string;
  formik: FormikProps<any>;
}

const InputComponent: React.FC<InputProps> = ({
  label,
  name,
  placeholder,
  type,
  formik,
}) => {
  const handleBlur: React.FocusEventHandler<HTMLElement> = (e) => {
    formik.handleBlur(e);
  };
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    formik.handleChange(e);
  };
  return (
    <div className={"form-input"}>
      <label className={"input-block"} htmlFor={name}>
        {label}
      </label>
      <input
        className={`black-border input-block ${
          formik.touched.name && formik.errors.name
            ? "red-border"
            : "grey-border"
        }`}
        onChange={handleChange}
        onBlur={handleBlur}
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={formik.values[name] as string}
      />
      {formik.touched[name] && formik.errors[name] && (
        <span className="red-text">{formik.errors[name] as string}</span>
      )}
    </div>
  );
};
export default InputComponent;
