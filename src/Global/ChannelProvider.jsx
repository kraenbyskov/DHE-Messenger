import React, { createContext, useEffect, useMemo, useState } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import firebase from "firebase/app";
import "firebase/firestore";

export const ChannelContext = createContext();



export const ChannelProvider = (props) => {
  const [GetData, setGetData] = useState(null);

  const value = useMemo(() => ({ GetData, setGetData }), [GetData, setGetData]);

  const firestore = firebase.firestore();
  const messagesRef = firestore
    .collection("Channels")
  const query = messagesRef.orderBy("ChannelName");
  const [Channels] = useCollectionData(query, { idField: "id" });

  useEffect(() => {
    if (Channels) {
      setGetData(Channels);

    }
  }, [Channels]);

  return (
    <ChannelContext.Provider value={value}>
      {props.children}
    </ChannelContext.Provider>
  );
};
