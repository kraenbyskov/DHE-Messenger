import React from "react";
import { MainStyle } from "./Main.module.scss";

const Main = ({ children, signOut, user, signInWithGoogle }) => {
  return (
    <div className={MainStyle}>
      {React.Children.map(children, (child) => {
        return child.props
          ? React.createElement(child.type, {
              ...{
                ...child.props,
                key: child.props.name,
                signOut: signOut,
                user: user,
                signInWithGoogle: signInWithGoogle,
              },
            })
          : child;
      })}
    </div>
  );
};

export default Main;
