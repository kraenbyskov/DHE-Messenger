import React, { useState, useEffect, useContext } from "react";
import { firebase } from "../../Global/Firebase/config";

import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import { MessageContext } from "../../Global/MessageProvider";

const ChannelLengthToUser = (data, name) => {
  return new Promise((resolve, reject) => {
    firebase
      .firestore()
      .collection("Users")
      .doc(localStorage.getItem("Username"))
      .update({
        [name]: {
          channelLength: data.length,
        },
      });
  });
};

const ListOfChannels = ({ SelectChannel }) => {
  const [ListAllChannels, setListAllChannels] = useState();
  // const [UserData, setUserData] = useState();
  const { GetData } = useContext(MessageContext);
  console.log("ListOfChannels -> GetData", GetData);

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

  const SubscribeToChannel = async (ChannelName) => {
    if (SelectChannel) {
      await SelectChannel(ChannelName);
      if (GetData) {
        ChannelLengthToUser(GetData.Data, ChannelName);
      }
    }
  };

  return (
    <div>
      {ListAllChannels &&
        ListAllChannels.Data.map(({ ChannelName, channelLength }) => (
          <ListItem button key={ChannelName}>
            <ListItemIcon>
              <ChatBubbleOutlineOutlinedIcon />
            </ListItemIcon>
            <ListItemText
              primary={ChannelName}
              onClick={() => SubscribeToChannel(ChannelName)}
            />
            <p>{channelLength}</p>
          </ListItem>
        ))}
    </div>
  );
};

export default ListOfChannels;
