import React, { createContext, useEffect, useMemo, useState } from "react";
// import { firebase } from "../Global/Firebase/config";
import { useCollectionData } from "react-firebase-hooks/firestore";
import firebase from "firebase/app";
import "firebase/firestore";

export const MessageContext = createContext();

export const MessageProvider = (props) => {
  const { ChannelSelection } = props;
  const [GetData, setGetData] = useState(null);

  const value = useMemo(() => ({ GetData, setGetData }), [GetData, setGetData]);

  const firestore = firebase.firestore();
  const messagesRef = firestore
    .collection("Channels")
    .doc(ChannelSelection)
    .collection("Messages");



  const query = messagesRef.orderBy("createdAt", "asc").limitToLast(10);
  const [messages] = useCollectionData(query, { idField: "id" });

  useEffect(() => {
    if (ChannelSelection) {
      setGetData(messages);
    }
  }, [messages, ChannelSelection]);

  return (
    <MessageContext.Provider value={value}>
      {props.children}
    </MessageContext.Provider>
  );
};
