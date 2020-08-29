import React from "react";
import Style from "./DisplayMessages.module.scss";

const Messages = ({ Photo, Message, MessageStyle }) => {
  return (
    <div className={MessageStyle}>
      <p>
        <span
          className={Style.MessagePhoto}
          style={{ backgroundImage: `url("${Photo}")` }}
        />
        {Message}
      </p>
    </div>
  );
};

const DisplayMessages = ({ Data, userName }) => {
  console.log(Data);
  return (
    <div style={{ marginBottom: "100px" }}>
      {Data
        ? Data.Data.map(({ User, Message, Photo }) =>
            userName === User ? (
              <Messages
                MessageStyle={Style.MessageRight}
                Message={Message}
                Photo={Photo}
              />
            ) : (
              <Messages
                Message={Message}
                Photo={Photo}
                MessageStyle={Style.MessageLeft}
              />
            )
          )
        : null}
    </div>
  );
};

export default DisplayMessages;
