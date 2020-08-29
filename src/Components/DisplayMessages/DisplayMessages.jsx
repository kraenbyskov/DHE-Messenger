import React from "react";
import Style from "./DisplayMessages.module.scss";

const DisplayMessages = ({ Data, userName }) => {
  return (
    <div>
      {Data
        ? Data.Data.map(({ User, Message }) => (
            <div
              className={
                userName === User ? Style.MessageRight : Style.MessageLeft
              }
            >
              <p>{User}</p>
              <p>{Message}</p>
            </div>
          ))
        : null}
    </div>
  );
};

export default DisplayMessages;
