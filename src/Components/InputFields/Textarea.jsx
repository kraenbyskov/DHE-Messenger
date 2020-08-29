import React from "react";

const Textarea = (props) => {
  const { FormStyling, register, errors, Title, placeholder, name } = props;
  const { Label, Input, Error } = FormStyling;
  return (
    <div>
      {Title ? <label className={Label}>{Title}</label> : null}
      <textarea
        className={Input}
        name={name}
        id=""
        placeholder={placeholder}
        rows="2"
        ref={register({
          required: {
            value: true,
            message: "This is Required",
          },
        })}
      ></textarea>
      {errors[name] && errors[name].type === "required" && (
        <p className={Error}>{errors[name].message}</p>
      )}
    </div>
  );
};

export default Textarea;
