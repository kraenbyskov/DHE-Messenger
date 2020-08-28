import React from "react";

const Main = ({ children }) => {
  return (
    <div>
      {React.Children.map(children, (child) => {
        return child.props
          ? React.createElement(child.type, {
              ...{
                ...child.props,
                key: child.props.name,
                message: "a Goat",
              },
            })
          : child;
      })}
    </div>
  );
};

export default Main;
