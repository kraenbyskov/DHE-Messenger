import React from "react";
import Style from "./DisplayMessages.module.scss";

const DisplayMessages = ({ Data, userName }) => {
  console.log(Data);
  return (
    <div>
      {Data
        ? Data.Data.map(({ User, Message, Photo }) => (
            <div
              className={
                userName === User ? Style.MessageRight : Style.MessageLeft
              }
            >
              <h4>
                <span
                  className={Style.MessagePhoto}
                  style={{ backgroundImage: `url("${Photo}")` }}
                />
                {User}
              </h4>
              <p>{Message}</p>
            </div>
          ))
        : null}
    </div>
  );
};

export default DisplayMessages;
