import React from "react";
import { useForm } from "react-hook-form";
import FormStyling from "./InputFields.module.scss";

export default function Form({ children, onSubmit }) {
  const { register, handleSubmit, errors } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {React.Children.map(children, (child) => {
        return child.props.name
          ? React.createElement(child.type, {
              ...{
                ...child.props,
                register: register,
                FormStyling: FormStyling,
                errors: errors,
                key: child.props.name,
              },
            })
          : child;
      })}
    </form>
  );
}
