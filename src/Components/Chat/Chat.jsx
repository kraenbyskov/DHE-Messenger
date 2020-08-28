import React, { useEffect, useState } from "react";
import { ChatStyle } from "./Chat.module.scss";
import { firebase } from "../../Global/Firebase/config";
import "firebase/auth";

const Chat = () => {
  const [GetData, setGetData] = useState(null);

  const ref = firebase.firestore().collection("pokemon");

  const onCollection = (querySnapshot) => {
    querySnapshot.forEach((doc) => {
      setGetData(doc.data());
    });
  };

  useEffect(() => {
    ref.onSnapshot(onCollection);
    // eslint-disable-next-line
  }, []);

  return <div className={ChatStyle}>This is the chat windows</div>;
};

export default Chat;
