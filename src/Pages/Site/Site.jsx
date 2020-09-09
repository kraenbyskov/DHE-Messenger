import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import Header from "../../Components/Header/Header";
import Content from "../../Components/Content/Content";
import LeftSidebar from "../../Components/LeftSidebar/LeftSidebar";
import RightSidebar from "../../Components/RightSidebar/RightSidebar";
import Chat from "../../Components/Chat/Chat";

const Site = (props) => {
  const [ChannelSelection, setChannelSelection] = useState("Test kanal");
  return (
    <>
      {localStorage.getItem("Username") ? (
        <Content>
          <Header signOut={props.signOut} user={props.user} />
          <LeftSidebar SelectChannel={setChannelSelection} />
          <Chat ChannelSelection={ChannelSelection} />
          <RightSidebar />
        </Content>
      ) : (
        <Redirect to="/signIn" />
      )}
    </>
  );
};

export default Site;
