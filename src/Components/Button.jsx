import React from "react";

export function Button({ FormStyling, name }) {
  const { Button } = FormStyling;
  return <input className={Button} name={name} type="submit" value="Submit" />;
}

export default Button;
