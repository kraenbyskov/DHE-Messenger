import React from "react";
import { ContentStyle } from "./Content.module.scss";

const Content = ({ children }) => {
  return (
    <div className={ContentStyle}>
      {React.Children.map(children, (child) => {
        return child.props
          ? React.createElement(child.type, {
              ...{
                ...child.props,
                key: child.props.name,
              },
            })
          : child;
      })}
    </div>
  );
};

export default Content;
