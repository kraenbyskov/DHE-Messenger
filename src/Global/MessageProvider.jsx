import React, { createContext, useEffect, useMemo, useState } from "react";
import { firebase } from "../Global/Firebase/config";

export const MessageContext = createContext();

const FirestoreData = (Channels) => {
  return new Promise((resolve, reject) => {});
};

const FetchMessage = async (setState, Channels) => {
  const Fecth = await FirestoreData(Channels);
  setState(Fecth);
};

export const MessageProvider = (props) => {
  const { ChannelSelection } = props;
  const [GetData, setGetData] = useState(null);

  const value = useMemo(() => ({ GetData, setGetData }), [GetData, setGetData]);
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
    <MessageContext.Provider value={value}>
      {props.children}
    </MessageContext.Provider>
  );
};
