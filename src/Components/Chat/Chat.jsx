import React, { useEffect, useState } from "react";
import { firebase } from "../../Global/Firebase/config";
import "firebase/auth";
import { Container } from "@material-ui/core";
import DisplayMessages from "../Chat/DisplayMessages/DisplayMessages";
import SendMessage from "../Chat/SendMessage/SendMessage";

import style from "./Chat.module.scss";

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
          const { User, Message, Photo } = doc.data();
          Data.push({
            id: doc.id,
            Message,
            User,
            Photo,
          });
          setGetData({ Data });
        });
      };
      ref.onSnapshot(onCollection);
    }
  }, [ChannelSelection]);

  return (
    <Container component="main" className={style.Chat}>
      {ChannelSelection ? (
        <>
          <DisplayMessages Data={GetData} userName={"hans"} />
          <SendMessage user={user} ChannelSelection={ChannelSelection} />
        </>
      ) : null}
    </Container>
  );
};

export default Chat;
