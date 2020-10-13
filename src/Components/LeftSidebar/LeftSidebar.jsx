import React, { useState } from "react";

import Drawer from "@material-ui/core/Drawer";
import AddNewChannnel from "../LeftSidebar/AddNewChannel";
import ListOfChannels from "../LeftSidebar/ListOfChannels";
import { makeStyles } from "@material-ui/core/styles";


import List from "@material-ui/core/List";
import styled from "styled-components";

const drawerWidth = "auto";

const LeftSidebarContainer = styled.div`
  grid-area: LeftSidebar;
  overflow: scroll;

  &::-webkit-scrollbar {
    width: 2px;

    &-thumb {
      -webkit-border-radius: 10px;
      border-radius: 10px;
      background: lightgray;
    }

    &-track-piece:end {
      margin-bottom: 100px;
    }
  }
`;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    position: "relative",
    width: drawerWidth,
  },
}));

const LeftSidebar = ({ SelectChannel }) => {
  const [AddChannelWindow, setAddChannelWindow] = useState(true);
  const classes = useStyles();

  return (
    <LeftSidebarContainer>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <List>
          <ListOfChannels SelectChannel={SelectChannel} />
          {AddChannelWindow ? (
            <AddNewChannnel setAddChannelWindow={setAddChannelWindow} />
          ) : null}
        </List>
      </Drawer>
    </LeftSidebarContainer>
  );
};

export default LeftSidebar;
