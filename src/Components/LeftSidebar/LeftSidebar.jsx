import React, { useState } from "react";
import { LeftSidebarStyle } from "./LeftSidebar.module.scss";
import AddNewChannnel from "../AddNewChannel";
import ListOfChannels from "../ListOfChannels";

const LeftSidebar = ({ SelectChannel }) => {
  const [AddChannelWindow, setAddChannelWindow] = useState(false);
  return (
    <div className={LeftSidebarStyle}>
      <h3 onClick={() => setAddChannelWindow(true)}>Add New Channel</h3>
      {AddChannelWindow ? (
        <AddNewChannnel setAddChannelWindow={setAddChannelWindow} />
      ) : null}
      <ListOfChannels SelectChannel={SelectChannel} />
    </div>
  );
};

export default LeftSidebar;
