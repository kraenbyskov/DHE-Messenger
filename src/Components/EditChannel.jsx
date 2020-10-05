import { Container, Paper } from "@material-ui/core";
import React from "react";
import styled from "styled-components";

const EditChannelContainer = styled(Container)`
  position: absolute;
  width: 100%;
  height: 100%;
  background: green;
  z-index: 1000000;
`;

const EditChannelPaper = styled(Paper)`
  position: absolute;
  margin: 10px;
  padding: 10px;
  width: 50%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const EditChannel = ({ EditChannelsDisplay, setEditChannelsDisplay }) => {
  return (
    <>
      {EditChannelsDisplay ? (
        <EditChannelContainer onClick={() => setEditChannelsDisplay(false)}>
          <EditChannelPaper elevation={3}>
            <h1>hey</h1>
          </EditChannelPaper>
        </EditChannelContainer>
      ) : null}
    </>
  );
};

export default EditChannel;
