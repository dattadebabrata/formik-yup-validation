import React from "react";
import "./radio-button.styles.css";
import { FormikProps } from "formik";

interface RadioButtonProps {
  nameFor: string;
  radioOptions: { label: string; value: string }[];
  formik: FormikProps<any>;
}

const RadioButton: React.FC<RadioButtonProps> = ({
  nameFor,
  radioOptions,
  formik,
}) => {
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    formik.handleChange(e);
  };
  return (
    <div className={"radio-group"}>
      <p className={"radio-title"}>Please Select your gender:-</p>
      {formik.touched[nameFor] && formik.errors[nameFor] && (
        <span className="red-text">{formik.errors[nameFor] as string}</span>
      )}
      {radioOptions.map((option) => (
        <div className={"radio-option"} key={option.value as string}>
          <input
            type="radio"
            name={nameFor as string}
            id={option.value as string}
            value={option.value as string}
            checked={formik.values[nameFor] === option.value}
            onChange={handleChange}
          />
          <label className={"radio-label"} htmlFor={option.value as string}>
            {option.label as string}
          </label>
        </div>
      ))}
    </div>
  );
};

export default RadioButton;
