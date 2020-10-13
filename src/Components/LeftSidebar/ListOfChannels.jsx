import React, { useState, useEffect } from "react";
import { firebase } from "../../Global/Firebase/config";
import ChannelButton from "./ChannelButton";

const ListOfChannels = ({ SelectChannel }) => {
  const [ListAllChannels, setListAllChannels] = useState();

  useEffect(() => {
    firebase.firestore().collection("Users").doc();

    const ref = firebase.firestore().collection("Channels");

    const onCollection = (querySnapshot) => {
      const Data = [];
      querySnapshot.forEach((doc) => {
        const { Admin, ChannelName, channelLength } = doc.data();
        Data.push({
          id: doc.id,
          ChannelName,
          Admin,
          channelLength,
        });
        setListAllChannels({ Data });
      });
    };
    ref.onSnapshot(onCollection);
  }, [SelectChannel]);

  return (
    <>
      {ListAllChannels &&
        ListAllChannels.Data.map(({ ChannelName }) => (
          <ChannelButton ChannelName={ChannelName} SelectChannel={SelectChannel}/>
        ))}
    </>
  );
};

export default ListOfChannels;
