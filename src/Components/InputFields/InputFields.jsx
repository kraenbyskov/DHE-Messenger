import React from "react";

export function Text({
  register,
  FormStyling,
  Title,
  errors,
  placeholder,
  name,
}) {
  const { Input, Error } = FormStyling;
  return (
    <div>
      <input
        className={Input}
        name={name}
        type="text"
        placeholder={placeholder}
        ref={register({
          required: {
            value: true,
            message: "This is Required",
          },
          minLength: {
            value: 2,
            message: "The Field needs to be longer the 2 letters",
          },
        })}
      />
      {errors[name] && errors[name].type === "required" && (
        <p className={Error}>{errors[name].message}</p>
      )}
      {errors[name] && errors[name].type === "minLength" && (
        <p className={Error}>{errors[name].message}</p>
      )}
    </div>
  );
}

export default Text;
