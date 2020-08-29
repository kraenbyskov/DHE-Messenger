import React, { useEffect, useState } from "react";
import { ChatStyle } from "./Chat.module.scss";
import { firebase } from "../../Global/Firebase/config";
import "firebase/auth";
import DisplayMessages from "../Chat/DisplayMessages/DisplayMessages";
import SendMessage from "../Chat/SendMessage/SendMessage";

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
    <div className={ChatStyle}>
      {ChannelSelection ? (
        <div>
          <DisplayMessages Data={GetData} userName={user.displayName} />
          <SendMessage user={user} ChannelSelection={ChannelSelection} />
        </div>
      ) : null}
    </div>
  );
};

export default Chat;
