import React, { useState, useEffect } from "react";
import { firebase } from "../../Global/Firebase/config";

import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";

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
          <ListItem button key={ChannelName}>
            <ListItemIcon>
              <ChatBubbleOutlineOutlinedIcon />
            </ListItemIcon>
            <ListItemText
              primary={ChannelName}
              onClick={() => SelectChannel(ChannelName)}
            />
          </ListItem>
        ))}
    </div>
  );
};

export default ListOfChannels;
