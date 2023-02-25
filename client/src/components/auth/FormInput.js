import { useState } from "react";

const FormInput = (props) => {
  const { label, errorMessage, onChange, id, ...inputProps } = props;
  const [focused, setFocused] = useState(false);

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <div className="form-Item">
      <label>{label}</label>
      <input
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() => inputProps.name === "confirmPass" && setFocused(true)}
        focused={focused.toString()}
      />
      <span className="sw">Password should be atleast 6-16 characters and must include atleast 1 letter, 1 number and 1 special character </span>
      <span className="error">{errorMessage}</span>
    </div>
  );
};

export default FormInput;
