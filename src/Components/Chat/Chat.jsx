import React, { useEffect, useState } from "react";
import { ChatStyle } from "./Chat.module.scss";
import { firebase } from "../../Global/Firebase/config";
import "firebase/auth";
import DisplayMessages from "../DisplayMessages/DisplayMessages";
import SendMessage from "../SendMessage/SendMessage";

const Chat = (props) => {
  const { user, ChannelSelection } = props;
  console.log("Chat -> ChannelSelection", ChannelSelection);
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
          const { User, Message } = doc.data();
          Data.push({
            id: doc.id,
            Message,
            User,
          });
          setGetData({ Data });
        });
      };
      ref.onSnapshot(onCollection);
    }
  }, [ChannelSelection]);

  return (
    <div className={ChatStyle}>
      <DisplayMessages Data={GetData} userName={user.displayName} />
      <SendMessage
        userName={user.displayName}
        ChannelSelection={ChannelSelection}
      />
    </div>
  );
};

export default Chat;
