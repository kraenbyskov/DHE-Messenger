import React from "react";
import { Container } from "@material-ui/core";
import DisplayMessages from "./DisplayMessages";
import SendMessage from "./SendMessage";
import styled from "styled-components";

const ChatWindow = styled(Container)`
  overflow: scroll;

  &::-webkit-scrollbar {
    width: 2px;

    &-thumb {
      -webkit-border-radius: 10px;
      border-radius: 10px;
      background: lightgray;
    }

    &-track-piece:end {
      margin-bottom: 100px;
    }
  }
`;

const Chat = (props) => {
  const { user, ChannelSelection } = props;

  return (
    <ChatWindow component="main" >
      {ChannelSelection ? (
        <>
          <DisplayMessages
            userName={localStorage.getItem("Username")}
            ChannelSelection={ChannelSelection}
          />
          <SendMessage user={user} ChannelSelection={ChannelSelection} />
        </>
      ) : null}
    </ChatWindow>
  );
};

export default Chat;
