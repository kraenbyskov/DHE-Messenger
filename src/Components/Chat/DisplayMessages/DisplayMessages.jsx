import React, { useEffect } from "react";

import { makeStyles } from "@material-ui/core/styles";

import Messages from "./Message";
import MyMessages from "./MyMessages";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    marginBottom: "50px",
  },
}));

const DisplayMessages = ({ Data, userName, ChannelSelection }) => {
  const classes = useStyles();

  const messagesEndRef = React.createRef();

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView();
  };

  useEffect(() => {
    scrollToBottom();
    // eslint-disable-next-line
  }, [Data]);

  return (
    <div className={classes.root}>
      {Data
        ? Data.Data.map(({ User, Message, id, NewChannelMessage }) =>
            NewChannelMessage ? (
              <p
                key={id}
                style={{
                  textAlign: "center",
                  fontSize: "10px",
                  color: "lightgray",
                }}
              >
                {NewChannelMessage}
              </p>
            ) : userName === User ? (
              <MyMessages
                key={id}
                Channel={ChannelSelection}
                Message={Message}
                id={id}
                userName={User}
              />
            ) : (
              <Messages key={id} Message={Message} id={id} userName={User} />
            )
          )
        : null}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default DisplayMessages;
