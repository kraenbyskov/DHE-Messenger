import React, { createContext, useEffect, useState } from "react";
import { firebase } from "../Global/Firebase/config";

export const MessageContext = createContext();

export const MessageProvider = (props) => {
  const { ChannelSelection } = props;
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
          const { User, Message, Date, NewChannelMessage } = doc.data();
          Data.push({
            id: doc.id,
            Message,
            User,
            Date,
            NewChannelMessage,
          });
          setGetData({ Data });
        });
      };
      ref.onSnapshot(onCollection);
    }
  }, [ChannelSelection]);

  return (
    <MessageContext.Provider value={[GetData, setGetData]}>
      {props.children}
    </MessageContext.Provider>
  );
};
