import React from "react";

const Login = (props) => {
  const { signInWithGoogle } = props;

  return (
    <div>
      <div>
        <p>Du skal signe ind først</p>
        <p onClick={signInWithGoogle}>Tryk her for at logge ind</p>
      </div>
    </div>
  );
};

export default Login;
