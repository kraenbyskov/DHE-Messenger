import React, { useContext } from "react";
import { ChannelContext } from "../../Global/ChannelProvider";
import ChannelButton from "./ChannelButton";

const ListOfChannels = ({ SelectChannel }) => {
  const { GetData } = useContext(ChannelContext);


  return (
    <>
      {GetData &&
        GetData.map(({ ChannelName, id }) => (
          <ChannelButton key={id} ChannelName={ChannelName} SelectChannel={SelectChannel} />
        ))}
    </>
  );
};

export default ListOfChannels;
