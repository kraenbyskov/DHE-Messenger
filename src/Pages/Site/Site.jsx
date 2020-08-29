import React, { useState } from "react";
import Header from "../../Components/Header/Header";
import Content from "../../Components/Content/Content";
import LeftSidebar from "../../Components/LeftSidebar/LeftSidebar";
import RightSidebar from "../../Components/RightSidebar/RightSidebar";
import Chat from "../../Components/Chat/Chat";

const Site = (props) => {
  const [ChannelSelection, setChannelSelection] = useState();

  const { user } = props;
  return (
    <Content>
      <Header signOut={props.signOut} user={props.user} />
      <LeftSidebar SelectChannel={setChannelSelection} />
      <Chat user={user} ChannelSelection={ChannelSelection} />
      <RightSidebar />
    </Content>
  );
};

export default Site;
