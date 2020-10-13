import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import Header from "../../Components/Header/Header";
import Content from "../../Components/Content/Content";
import LeftSidebar from "../../Components/LeftSidebar/LeftSidebar";
import RightSidebar from "../../Components/RightSidebar/RightSidebar";
import Chat from "../../Components/Chat";
import EditChannel from "../../Components/EditChannel";
import { MessageProvider } from "../../Global/MessageProvider";
import firebase from "firebase/app";
import "firebase/firestore";

const Site = (props) => {
  const firestore = firebase.firestore();
  const messagesRef = firestore.collection("Channels");
  const [ChannelSelection, setChannelSelection] = useState(
    messagesRef.Cd.segments[0]
  );


  const [EditChannelsDisplay, setEditChannelsDisplay] = useState(false);

  return (
    <MessageProvider ChannelSelection={ChannelSelection}>
      {localStorage.getItem("Username") ? (
        <Content>
          <Header signOut={props.signOut} user={props.user} />
          <LeftSidebar SelectChannel={setChannelSelection} />
          <Chat ChannelSelection={ChannelSelection} />
          <RightSidebar
            ChannelSelection={ChannelSelection}
            setEditChannelsDisplay={setEditChannelsDisplay}
          />
          <EditChannel
            EditChannelsDisplay={EditChannelsDisplay}
            setEditChannelsDisplay={setEditChannelsDisplay}
          />
        </Content>
      ) : (
        <Redirect to="/signIn" />
      )}
    </MessageProvider>
  );
};

export default Site;
