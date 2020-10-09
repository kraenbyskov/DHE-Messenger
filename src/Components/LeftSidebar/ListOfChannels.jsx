import React, { useState, useEffect, useContext } from "react";
import { firebase } from "../../Global/Firebase/config";

import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import { MessageContext } from "../../Global/MessageProvider";

const UnreadMessages = ({ Data, ChannelName }) => {
  const [UserData, setUserData] = useState();
  console.log("UnreadMessages -> UserData", UserData);

  useEffect(() => {
    firebase.firestore().collection("Users").doc();

    const userRef = firebase
      .firestore()
      .collection("Users")
      .doc(localStorage.getItem("Username"));

    userRef.get().then((doc) => {
      if (doc.exists) {
        const userData = doc.data()[`${ChannelName}`];
        setUserData(userData);
      } else {
        console.log("No such document!");
      }
    });
  }, [ChannelName]);

  return (
    <p>{UserData && Data ? Data.length - UserData.channelLength : null}</p>
  );
};

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
        ChannelLengthToUser(GetData, ChannelName);
      }
    }
  };

  return (
    <div>
      {ListAllChannels &&
        ListAllChannels.Data.map(({ ChannelName }) => (
          <ListItem button key={ChannelName}>
            <ListItemIcon>
              <ChatBubbleOutlineOutlinedIcon />
            </ListItemIcon>
            <ListItemText
              primary={ChannelName}
              onClick={() => SubscribeToChannel(ChannelName)}
            />
            <UnreadMessages
              Data={GetData}
              ChannelName={ChannelName}
            ></UnreadMessages>
          </ListItem>
        ))}
    </div>
  );
};

export default ListOfChannels;
