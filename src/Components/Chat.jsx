import React, { useEffect, useState } from "react";
import { firebase } from "../Global/Firebase/config";
import "firebase/auth";
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
  const [GetData, setGetData] = useState(null);

  useEffect(() => {
    if (ChannelSelection) {
      const ref = firebase
        .firestore()
        .collection("Channels")
        .doc(ChannelSelection)
        .collection("Messages")
        .orderBy("Date");
      const onCollection = (querySnapshot) => {
        const Data = [];
        querySnapshot.forEach((doc) => {
          const { User, Message, NewChannelMessage } = doc.data();
          Data.push({
            id: doc.id,
            Message,
            User,
            NewChannelMessage,
          });
          setGetData({ Data });
        });
      };
      ref.onSnapshot(onCollection);
    }
  }, [ChannelSelection]);

  return (
    <ChatWindow component="main">
      {ChannelSelection ? (
        <>
          <DisplayMessages
            Data={GetData}
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
