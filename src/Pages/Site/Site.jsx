import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import Header from "../../Components/Header/Header";
import Content from "../../Components/Content/Content";
import LeftSidebar from "../../Components/LeftSidebar/LeftSidebar";
import RightSidebar from "../../Components/RightSidebar/RightSidebar";
import Chat from "../../Components/Chat";
import EditChannel from "../../Components/EditChannel";

const Site = (props) => {
  const [ChannelSelection, setChannelSelection] = useState(
    "Dette er en helt ny kanal"
  );

  const [EditChannelsDisplay, setEditChannelsDisplay] = useState(false);
  console.log("Site -> EditChannelsDisplay", EditChannelsDisplay);

  return (
    <>
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
    </>
  );
};

export default Site;
