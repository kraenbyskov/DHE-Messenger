import React, { useState, useEffect } from "react";
import { firebase } from "../Global/Firebase/config";

const ListOfChannels = ({ SelectChannel }) => {
  const [ListAllChannels, setListAllChannels] = useState();

  useEffect(() => {
    const ref = firebase.firestore().collection("Channels");

    const onCollection = (querySnapshot) => {
      const Data = [];
      querySnapshot.forEach((doc) => {
        const { Admin, ChannelName } = doc.data();
        Data.push({
          id: doc.id,
          ChannelName,
          Admin,
        });
        setListAllChannels({ Data });
      });
    };
    ref.onSnapshot(onCollection);
  }, []);

  return (
    <div>
      {ListAllChannels &&
        ListAllChannels.Data.map(({ ChannelName }) => (
          <div>
            <p onClick={() => SelectChannel(ChannelName)}>{ChannelName}</p>
          </div>
        ))}
    </div>
  );
};

export default ListOfChannels;
