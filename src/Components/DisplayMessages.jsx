import React, { useContext, useEffect } from "react";

import { makeStyles } from "@material-ui/core/styles";

import Messages from "./Message";
import MyMessages from "./MyMessages";
import styled from "styled-components";
import { MessageContext } from "../Global/MessageProvider";
import "firebase/firestore";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    marginBottom: "50px",
  },
}));

const WelcomeMessage = styled.p`
  text-align: center;
  font-size: 10px;
  color: lightgray;
`;

const DisplayMessages = ({ userName, ChannelSelection }) => {
  const { GetData } = useContext(MessageContext);

  const classes = useStyles();

  const messagesEndRef = React.createRef();

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView();
  };

  useEffect(() => {
    scrollToBottom();
    // eslint-disable-next-line
  }, [GetData]);

  return (
    <div className={classes.root}>

      {GetData
        ? GetData.map(({ User, Message, id, NewChannelMessage }) => {
          return (
            <div key={id}>
              {
                NewChannelMessage ? (
                  <WelcomeMessage >{NewChannelMessage}</WelcomeMessage>
                ) : userName === User ? (
                  <>
                    <MyMessages
                      key={id}
                      Channel={ChannelSelection}
                      Message={Message}
                      id={id}
                      userName={User}
                    />
                  </>
                ) : (
                      <Messages key={id} Message={Message} id={id} userName={User} />
                    )
              }
            </div>
          )
        })
        : null}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default DisplayMessages;
